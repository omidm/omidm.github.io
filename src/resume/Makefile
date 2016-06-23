
TARGET = resume

TEXFILES = $(wildcard *.tex)
PDF_FIGURES = $(wildcard figs/*.pdf)
PNG_FIGURES = $(wildcard figs/*.png)
FIGURES= $(PDF_FIGURES) $(PNG_FIGURES)
TEXFILE = $(TARGET).tex
PDF = $(TARGET).pdf

all: $(PDF)

%.pdf: %.tex $(TEXFILES) $(FIGURES)
	pdflatex $*.tex

clean:
	/bin/rm -f $(PDF) *.dvi *.aux *.ps *~ *.log *.out *.lot *.lof *.toc *.blg *.bbl *.soc

install:
	pdflatex $(TARGET).tex
	cp $(PDF) ../../materials
view:
	pdflatex $(TARGET).tex
	okular $(PDF)

osx:
	pdflatex $(TARGET).tex
	open $(PDF)

evince:
	pdflatex $(TARGET).tex
	evince $(PDF) &

windows:
	pdflatex $(TARGET).tex
	explorer.exe $(PDF) &

check:
	pdflatex $(TARGET).tex | grep -i -e "undefined" -e "multiply"
