"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Jobs = () => {
  return (
    <Fragment>
      <Seo title={"Jobs"} />
      <Pageheader currentpage="Jobs" activepage="ATS" mainpage="Jobs" />
    </Fragment>
  )
}

export default Jobs
