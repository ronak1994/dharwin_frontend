"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Interviews = () => {
  return (
    <Fragment>
      <Seo title={"Interviews"} />
      <Pageheader currentpage="Interviews" activepage="ATS" mainpage="Interviews" />
    </Fragment>
  )
}

export default Interviews
