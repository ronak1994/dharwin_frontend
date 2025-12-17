"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Candidates = () => {
  return (
    <Fragment>
      <Seo title={"Candidates"} />
      <Pageheader currentpage="Candidates" activepage="ATS" mainpage="Candidates" />
    </Fragment>
  )
}

export default Candidates
