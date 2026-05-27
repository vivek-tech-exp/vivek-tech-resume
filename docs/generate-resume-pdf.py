#!/usr/bin/env python3
"""Generate ATS-friendly PDF from docs/vivek-mankonda-resume.txt."""

from pathlib import Path

from fpdf import FPDF

ROOT = Path(__file__).resolve().parent
SOURCE = ROOT / "vivek-mankonda-resume.txt"
OUTPUT = ROOT / "vivek-mankonda-resume.pdf"

MARGIN_MM = 18
BODY_SIZE = 10.5
HEADING_SIZE = 11.5
NAME_SIZE = 14
LINE_HEIGHT = 5.2
BULLET_INDENT_MM = 5

CONTACT_PREFIXES = ("Email:", "LinkedIn:", "GitHub:", "Location:")
PRIVATE_CONTACT_PREFIXES = (
    "Phone:",
    "Mobile:",
    "Tel:",
    "Cell:",
    "Fax:",
    "WhatsApp:",
)


def should_omit_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False
    lower = stripped.lower()
    if lower.startswith(PRIVATE_CONTACT_PREFIXES):
        return True
    if lower.startswith("phone ") or lower.startswith("mobile "):
        return True
    return False


class ResumePDF(FPDF):
    def footer(self) -> None:
        self.set_y(-12)
        self.set_font("Helvetica", "", 9)
        self.set_text_color(80, 80, 80)
        self.cell(0, 8, f"Page {self.page_no()}/{{nb}}", align="C")

    @property
    def content_width(self) -> float:
        return self.w - self.l_margin - self.r_margin


def is_section_heading(line: str) -> bool:
    stripped = line.strip()
    if not stripped or stripped.startswith("- "):
        return False
    if stripped.endswith(", India") or stripped.endswith(", Present") or stripped.endswith(", Remote"):
        return False
    if " to " in stripped and any(
        month in stripped
        for month in ("January", "March", "April", "October", "August", "June", "May", "July")
    ):
        return False
    if stripped[0].isupper() and stripped == stripped.upper() and len(stripped) < 60:
        return True
    if stripped.startswith("Bachelor of"):
        return True
    return False


def is_role_title(line: str) -> bool:
    stripped = line.strip()
    return (
        "," in stripped
        and not stripped.startswith("- ")
        and not stripped.isupper()
        and any(
            token in stripped
            for token in ("Engineer", "Developer", "Builder", "Assistant", "Baby")
        )
    )


def write_block(pdf: ResumePDF, text: str, *, style: str = "", size: float = BODY_SIZE, gap: float = 0) -> None:
    pdf.set_x(pdf.l_margin)
    pdf.set_font("Helvetica", style, size)
    pdf.multi_cell(pdf.content_width, LINE_HEIGHT, text)
    if gap:
        pdf.ln(gap)


def build_pdf() -> None:
    lines = [
        line
        for line in SOURCE.read_text(encoding="utf-8").splitlines()
        if not should_omit_line(line)
    ]

    pdf = ResumePDF(unit="mm", format="Letter")
    pdf.alias_nb_pages()
    pdf.set_auto_page_break(auto=True, margin=16)
    pdf.set_margins(MARGIN_MM, MARGIN_MM, MARGIN_MM)
    pdf.add_page()
    pdf.set_text_color(0, 0, 0)

    for index, raw in enumerate(lines):
        line = raw.rstrip()
        if not line:
            pdf.ln(LINE_HEIGHT * 0.5)
            continue

        if index == 0:
            write_block(pdf, line, style="B", size=NAME_SIZE, gap=0.5)
            continue

        if index == 1 or line.startswith(CONTACT_PREFIXES):
            pdf.set_text_color(30, 30, 30)
            write_block(pdf, line)
            pdf.set_text_color(0, 0, 0)
            continue

        if is_section_heading(line):
            pdf.ln(LINE_HEIGHT * 0.35)
            write_block(pdf, line, style="B", size=HEADING_SIZE, gap=0.3)
            continue

        if is_role_title(line):
            pdf.ln(LINE_HEIGHT * 0.2)
            write_block(pdf, line, style="B")
            continue

        if line.startswith("- "):
            pdf.set_text_color(20, 20, 20)
            pdf.set_x(pdf.l_margin + BULLET_INDENT_MM)
            pdf.set_font("Helvetica", "", BODY_SIZE)
            pdf.multi_cell(pdf.content_width - BULLET_INDENT_MM, LINE_HEIGHT, line)
            continue

        pdf.set_text_color(20, 20, 20)
        write_block(pdf, line)

    pdf.output(OUTPUT)


if __name__ == "__main__":
    if not SOURCE.exists():
        raise SystemExit(f"Missing source file: {SOURCE}")
    build_pdf()
    print(f"Wrote {OUTPUT}")
