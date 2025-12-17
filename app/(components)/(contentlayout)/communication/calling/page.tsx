"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Calling = () => {
  return (
    <Fragment>
      <Seo title={"Calling"} />
      <Pageheader currentpage="Calling" activepage="Communication" mainpage="Calling" />
    </Fragment>
  )
}

export default Calling
