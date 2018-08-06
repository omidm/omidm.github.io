
TARGET = resume
EXTENDED_TARGET = extended_$(TARGET)

TEXFILE = $(TARGET).tex
PDF = $(TARGET).pdf
EXTENDED_PDF = $(EXTENDED_TARGET).pdf
PDF_FIGURES = $(wildcard figs/*.pdf)
PNG_FIGURES = $(wildcard figs/*.png)
FIGURES = $(PDF_FIGURES) $(PNG_FIGURES)

all: $(PDF) $(EXTENDED_PDF)

$(PDF): $(TEXFILE) $(FIGURES)
	pdflatex $(TEXFILE)

$(EXTENDED_PDF): export ISEXTENDED=true
$(EXTENDED_PDF): $(TEXFILE) $(FIGURES)
	pdflatex -jobname=$(EXTENDED_TARGET) $(TEXFILE)

clean:
	/bin/rm -f $(PDF) $(EXTENDED_PDF) *.dvi *.aux *.ps *~ *.log *.out *.lot *.lof *.toc *.blg *.bbl *.soc

install: clean all
	cp $(PDF) ../../materials
	cp $(EXTENDED_PDF) ../../materials

view: clean all
	okular $(PDF)
	okular $(EXTENDED_PDF)

osx: clean all
	open $(PDF)
	open $(EXTENDED_PDF)

check:
	pdflatex $(TEXFILE) | grep -i -e "undefined" -e "multiply"
