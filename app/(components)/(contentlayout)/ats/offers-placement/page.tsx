"use client"
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const OffersPlacement = () => {
  return (
    <Fragment>
      <Seo title={"Offers & Placement"} />
      <Pageheader currentpage="Offers & Placement" activepage="ATS" mainpage="Offers & Placement" />
    </Fragment>
  )
}

export default OffersPlacement
