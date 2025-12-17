"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Recruiters = () => {
  return (
    <Fragment>
      <Seo title={"Recruiters"} />
      <Pageheader currentpage="Recruiters" activepage="ATS" mainpage="Recruiters" />
    </Fragment>
  )
}

export default Recruiters
