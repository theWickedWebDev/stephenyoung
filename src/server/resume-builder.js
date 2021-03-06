/* eslint-disable no-magic-numbers */
// DEPENDENCIES
import path from 'path';
import PDFDocument from 'pdfkit';
import moment from 'moment';
import stripHtml from 'string-strip-html';

// STYLEGUIDE
const COLORS = {
    link: '#a27749',
    primary: '#131e20',
    body: '#131e20'
};

const PAGE_OPTIONS = {
    margins: {
        top: 50,
        bottom: 50,
        left: 36,
        right: 36
    }
};

const FONT_SIZE = {
    title: 18,
    subtitle: 14,
    body: 12,
    small: 10,
    tiny: 8
};

const FONT_PRIMARY = 'Helvetica';
const FONT_PRIMARY_BOLD = 'Helvetica-Bold';
const FONT_PRIMARY_ITALIC = 'Helvetica-Oblique';

const FONT_TECH = 'Courier';
const FONT_TECH_BOLD = 'Courier-Bold';
const FONT_TECH_ITALIC = 'Courier-Oblique';

let currentPage = 0;
let totalPages = 0;

const resumeBuilder = (req, res, CONTENT) => {
    const doc = new PDFDocument(Object.assign(PAGE_OPTIONS, {
        autoFirstPage: false,
        bufferPages: true
    }));

    // Helpers
    const addPage = () => {
        return doc.addPage(PAGE_OPTIONS);
    };

    const hr = () => {
        return doc
            .moveDown()
            .moveDown();
    };

    // START BUILD

    doc.addPage(PAGE_OPTIONS);

    doc.on('pageAdded', () => {
        doc.text('', doc.page.margins.left, doc.page.margins.top);
    });

    // COVER PAGE
    doc
        .fillColor(COLORS.body)
        .fontSize(FONT_SIZE.small)
        .font(FONT_TECH_BOLD)
        .text(CONTENT.general.resume, 0, 300, { align: 'center' })
        .font(FONT_TECH)
        .moveDown()
        .text(CONTENT.general.myName, { align: 'center' })
        .moveDown()
        .moveDown()
        .font(FONT_TECH_ITALIC)
        .fontSize(FONT_SIZE.tiny)
        .text(`${CONTENT.general.generated }: ${ moment().format('dddd MMM DD, YYYY')}`, { align: 'center' })
        .moveDown()
        .text(`${CONTENT.general.from }: ${ req.headers.host }${req.url}`, { align: 'center' });

    // HEADER
    addPage();

    doc
        .fillColor(COLORS.body)
        .fontSize(FONT_SIZE.subtitle)
        .text(
            CONTENT.general.myName,
            PAGE_OPTIONS.margins.left + 10,
            PAGE_OPTIONS.margins.top + 20
        )
        .fontSize(FONT_SIZE.small)
        .font(FONT_TECH_BOLD)
        .text(
            CONTENT.homepage.title,
            PAGE_OPTIONS.margins.left + 10,
            PAGE_OPTIONS.margins.top + 40
        )
        .fillColor(COLORS.link)
        .text(
            'https://www.thewickedweb.dev/',
            PAGE_OPTIONS.margins.left + 10,
            PAGE_OPTIONS.margins.top + 50,
            { link: 'https://www.thewickedweb.dev/?resume=header' }
        )
        .font(FONT_TECH)
        .fontSize(FONT_SIZE.small)
        .fillColor(COLORS.link)
        .text('stephen@thewickedweb.dev', 200, 65, {
            align: 'right',
            link: 'mailto:stephen@thewickedweb.dev'
        })
        .fillColor(COLORS.body)
        .text('44 Newton Road', 200, 80, { align: 'right' })
        .text('Plaistow, NH 03865', 200, 95, { align: 'right' })
        .moveDown();

    // PREFACE
    doc
        .fillColor(COLORS.body)
        .fontSize(FONT_SIZE.small)
        .font(FONT_PRIMARY_ITALIC)
        .text(
            '',
            PAGE_OPTIONS.margins.left, 150,
            { align: 'left' }
        )
        .moveDown()
        .moveDown()
        .moveDown();

    // INTRODUCTION
    /* CONTENT.homepage.introduction.forEach(i => {
    doc
      .fillColor(COLORS.body)
      .font(FONT_PRIMARY)
      .fontSize(FONT_SIZE.body)
      .text(stripHtml(i))
      .moveDown();
  });*/
    //  addPage();

    // WHAT IM GREAT AT

    doc
        .fillColor(COLORS.primary)
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.title)
        .text(
            CONTENT.resume.skills.title,
            { align: 'left' }
        )
        .fillColor(COLORS.body)
        .moveDown();

    doc
        .fillColor(COLORS.body)
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.body)
        .text(stripHtml(CONTENT.resume.skills.tech.content.map((c) => {
            return c.name;
        }).join(', ')))
        .text(stripHtml(CONTENT.resume.skills.other.content.map((c) => {
            return c.name;
        }).join(', ')))
        .moveDown()
        .moveDown();

    hr();

    // EMPLOYMENT HIGHLIGHT

    doc
        .fillColor(COLORS.primary)
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.title)
        .text(CONTENT.resume.highlight.title, { align: 'left' })
        .fillColor(COLORS.body)
        .moveDown()
        .font(FONT_PRIMARY_BOLD)
        .fontSize(FONT_SIZE.body)
        .fillColor(COLORS.link)
        .text(
            stripHtml(CONTENT.resume.highlight.header),
            { link: CONTENT.resume.highlight.link, underline: true }
        )
        .fillColor(COLORS.body)
        .moveDown();

    CONTENT.resume.highlight.roles.forEach((r) => {
        doc
            .fillColor(COLORS.body)
            .font(FONT_PRIMARY)
            .fontSize(FONT_SIZE.body)
            .text(`${r.name } - ${ r.from } - ${ r.until}`);
    });

    doc
        .fillColor(COLORS.body)
        .moveDown()
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.small)
        .text(stripHtml(CONTENT.resume.highlight.focus))
        .moveDown()
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.small)
        .text(stripHtml(CONTENT.resume.highlight.description))
        .moveDown()
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.small)
        .text(CONTENT.resume.highlight.moreInfo)
        .moveDown()
        .fillColor(COLORS.link)
        .fontSize(FONT_SIZE.body)
        .text(CONTENT.resume.highlight.cta, { link: 'https://www.thewickedweb.dev/?resume=employmentHighlight' })
        .moveDown()
        .moveDown();

    hr();

    addPage();
    // ADDITIONAL EXPERIENCE
    doc
        .fillColor(COLORS.primary)
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.title)
        .text(CONTENT.resume.additionalExperience.title, { align: 'left' })
        .fillColor(COLORS.body);

    doc
        .fontSize(FONT_SIZE.small)
        .text(`Showing 3 of ${ CONTENT.resume.additionalExperience.content.length } additional experiences.`)
        .moveDown()
        .moveDown();

    CONTENT.resume.additionalExperience.content.slice(0, 3).forEach((c) => {
        doc
            .fillColor(COLORS.body)
            .font(FONT_PRIMARY_BOLD)
            .fontSize(FONT_SIZE.body)
            .fillColor(COLORS.body)
            .text(c.name ? `${c.name } - ${ c.title}` : c.title)
            .fillColor(COLORS.body)
            .font(FONT_PRIMARY_ITALIC)
            .fontSize(FONT_SIZE.small)
            .text(c.location ? `${c.location } // ${ c.from } - ${ c.until}` : `${c.from } - ${ c.until}`)
            .moveDown()
            .moveDown();
    });

    hr();

    // REFERENCES
    doc
        .fillColor(COLORS.primary)
        .font(FONT_PRIMARY)
        .fontSize(FONT_SIZE.title)
        .text(CONTENT.resume.references.title, { align: 'left' })
        .fillColor(COLORS.body);

    doc
        .fontSize(FONT_SIZE.small)
        .text(`Showing 3 of ${ CONTENT.resume.references.content.length } references.`)
        .moveDown()
        .moveDown();

    CONTENT.resume.references.content.filter((c) => {
        return c.relevant;
    }).slice(0, 3).forEach((c) => {
        doc
            .fillColor(COLORS.body)
            .font(FONT_PRIMARY_BOLD)
            .fontSize(FONT_SIZE.body)
            .fillColor(COLORS.link)
            .text(c.name, { link: c.link })
            .fontSize(FONT_SIZE.small)
            .fillColor(COLORS.body)
            .text(c.title)
            .moveDown()
            .fillColor(COLORS.body)
            .font(FONT_PRIMARY)
            .fontSize(FONT_SIZE.small)
            .text(c.content)
            .moveDown()
            .moveDown();
    });

    /**
 * GLOBAL EDITS TO ALL PAGES
 */
    let pages = doc.bufferedPageRange();
    for (let i = 0; i < pages.count; i++) {
        doc.switchToPage(i);
        // ADDS PAGE NUMBER
        doc
            .fillColor(COLORS.body)
            .fontSize(FONT_SIZE.tiny)
            .text(
                `Page: ${i + 1} of ${pages.count}`,
                10, 10,
                { align: 'right' }
            );
    };


    // CLOSE PDF
    doc.end();


    // SEND PDF TO USER
    res.setHeader('Content-Type', 'application/pdf');

    // Download PDF
    // res.setHeader('Content-disposition', 'attachment; filename="resume.pdf"');
    // Viewed PDF vs Download
    res.setHeader('Content-disposition', 'inline; filename="resume.pdf"');
    doc.pipe(res);
};

export default resumeBuilder;
