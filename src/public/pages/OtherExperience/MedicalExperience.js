// Dependencies
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import Section from 'components/Section';
import Article from 'components/Article';
import Header from 'components/Header';
import TagList from 'components/TagList';
import Meta from 'components/Meta';

const MedicalExperience = () => {
  const { t, i18n } = useTranslation();

  const medicalFieldTags = [
    { name: 'Phlebotomy' },
    { name: 'Medical Terminology' },
    { name: 'Hospitals' },
    { name: 'Assisted Living' },
    { name: 'Rehabiliation Facilities' },
    { name: 'ICU' },
    { name: 'NICU' },
    { name: 'Maternity' },
    { name: 'Primary Care Physician offices' },
    { name: 'HIPPA' },
    { name: 'ICD-9 Codes' },
    { name: 'Microbiology' },
    { name: 'Hematology' },
    { name: 'Chemistry' },
    { name: 'HIPPA' },
    { name: 'Protected Health Information (PHI)' },
    { name: 'Personal Protective Equipment (PPE)' },
  ];

  return [
    <Meta
      key="meta"
      robots="index"
      keywords="Medical, Phlebotomy, Medical Assistant"
      title="Phlebotomist and Medical Assistant"
      description={
        "For the first 5 years or so of my professional life, I worked " +
        " in the medical industry as a Certified Phlebotomist and " +
        "Medical Assistant."
      }
      canonical="https://www.thewickedweb.dev/other-experience/medical/"
    />,
    <Header
      key="header"
      title="Phlebotomist / Medical Assistant"
      subtitle="Sometimes referred to as a vampire or dracula"
      avatar={`${S3_URL}${S3_IMAGES_PATH}${S3_AVATAR_PATH}/avatar-2.svg`}
    />,
    <Section key="section">
      <Article title="Medical Industry">
        <h3>Phlebotomist / Medical Assistant</h3>
        <h4>Keywords / Skills</h4>
        <TagList list={medicalFieldTags}/>
        <br/>
        <h4>Introduction</h4>
        <p>
          For the first 5 years or so of my professional life, I worked in
          the medical industry as a <em className='alt'>Certified Phlebotomist</em>
          &nbsp;and <em className='alt'>Medical Assistant</em>.
        </p>
        <br/>
        <p>
          I worked in many different medical care facilities and wards including:
          Hospitals, Emergency Rooms (ER), Nursing homes, Assisted Living,
          Rehabiliation Facilities, Intensive Care (ICU), Newborn Intensive
          Care (NICU), Maternity, Oncology, Pyschiatric, as well as Primary
          Care Physician (PCP) offices and laboratories.
        </p>
        <br/>
        <h3>Companies I've worked for</h3>
        <h4>Private Laboratories</h4>
        <p>
          <a href="https://www.labcorp.com/" target="_blank">LabCorp</a> and&nbsp;
          <a href="https://mainehealth.org/nordx" target="_blank">NorDx</a>.
        </p>
        <br/>
        <h4>Hospitals</h4>
        <p>
          <a href="https://mainehealth.org/maine-medical-center" target="_blank">
            Maine Medical Center
          </a> (through NorDx) and&nbsp;
          <a
            href="https://stdavids.com/location/st-davids-medical-center/"
            target="_blank"
          >
            St. David's Medical Center
          </a> in Austin, TX.
        </p>
        <br/>
        <h3>
          Brief summary of my time as a phlebotomist and how I transitioned into
          software
        </h3>
        <h4>About my time as a phlebotomist</h4>
        <p>
          Working in this field was very exciting, fun and always fresh. I loved the
          atmosphere and the emotional side of working as a Phlebotomist. I
          very much enjoyed learning new tests and skills such as assisting with
          different <em className='alt'>microbiology</em> cultures such as rapid strep
          tests or blood cultures, learning manual <em className='alt'>differential
          counts</em>, and even assisting with <em className='alt'>cerebral spinal
          fluid (CSF)</em> testing. There was always something new happening
          and I am filled with many fun stories of my time working in this
          industry.
        </p>
        <br/>
        <h4>Struggles with this career choice</h4>
        <p>
          That being said, the biggest reason for leaving this industry was due
          to <em className='alt'>compensation</em> and growth. While working as a
          phlebotomist and medical assistant, I did not receive an income that
          allowed me to <em>really</em> live the way I wanted to.
          I didn't feel comfortable starting a family, buying a home, and I
          couldn't even afford to take vacations (other than stay-cations).
          Since all of these things are some of the most important parts of my
          life, I needed to make a change.
        </p>
        <br/>
        <h4>Transitioning from Phlebotomy to Engineering</h4>
        <p>
          Since middle-school, I have been coding and taking various coding
          classes, but never knew it was possible to do this <em>as a job</em>,
          or that it was something that <em>I</em> could do.
          It wasn't until over the years a portfolio of fun side-projects started
          to grow naturally that things started to "click".
        </p>
        <br/>
        <p>
          I started to receive offers for contract positions
          from a few different companies looking to build their website. It was
          then, when I realized that I could actually make a living doing
          the same thing that I already do for a hobby! I just didn't have the
          proper guidance I needed. I started to focus my attention in finding
          a mentor to help me learn how to take software development seriously
          and what skills I needed and should focus on.
        </p>
        <br/>
        <p>
          I decided to leave the medical position completely. I quit my job, and
          &nbsp;<em className='alt'>focused my time and energy on learning</em>, and
          work towards an internship or junior level coding position.
        </p>
        <br/>
        <p>
          In less than a year, all of my hard work had paid off when I was
          offered a full-time junior level position for a startup in Boston.
          I had officially pivoted from healthcare to technology/engineering
          and I could not have been happier with my decision.
        </p>
        <br/>
        <h4>Conclusion</h4>
        <p>
          It has been a while now since working in the medical field, but I am
          stil quite knowledgeable in it:
          Medical-terminology, various blood tests, HIPPA, PHI, PPE, ICD-9 codes,
          etc...
          As well as other general knowledge of the medical field such as
          the duties of various roles a medical care provider could have, how to
          comunicate safely and properly to patients, or even the use of
          different medical equipment such as N95 respirators and AEDs.
        </p>
      </Article>
    </Section>
  ];
};

export default MedicalExperience;
