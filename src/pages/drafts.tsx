import {mdiTableBorder } from '@mdi/js'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import CardBox from '../components/CardBox'
import LayoutAuthenticated from '../layouts/Authenticated'
import SectionMain from '../components/Section/Main'
import SectionTitleLineWithButton from '../components/Section/TitleLineWithButton'
import { getPageTitle } from '../config'
import LoadDrafts from '../components/DocumentStage/loadDrafts'

const Drafts = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Tables')}</title>
      </Head>
      <SectionMain>
        <SectionTitleLineWithButton icon={mdiTableBorder} title="List of Documents" main>
        </SectionTitleLineWithButton>

        <CardBox className="mb-6" hasTable>
          <LoadDrafts />
        </CardBox>

      </SectionMain>
    </>
  )
}

Drafts.getLayout = function getLayout(page: ReactElement) {
  return <LayoutAuthenticated>{page}</LayoutAuthenticated>
}

export default Drafts
