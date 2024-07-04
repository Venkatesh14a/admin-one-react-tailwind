import React, { useState } from 'react'
import { useSampleDrafts } from '../../hooks/sampleData'
import { DocumentAttributes } from '../../interfaces'
import Button from '../Button'
import Buttons from '../Buttons'
import CardBoxModal from '../CardBox/Modal'

const LoadDrafts = () => {
  const { clients } = useSampleDrafts()

  const perPage = 5


  const [currentPage, setCurrentPage] = useState(0)

  const clientsPaginated = clients.slice(perPage * currentPage, perPage * (currentPage + 1))

  const numPages = Math.ceil(clients.length / perPage)

  const pagesList = []

  for (let i = 0; i < numPages; i++) {
    console.log("numPages:" + numPages)
    pagesList.push(i)
  }

  const [isModalInfoActive, setIsModalInfoActive] = useState(false)
  const [isModalTrashActive, setIsModalTrashActive] = useState(false)

  const handleModalAction = () => {
    setIsModalInfoActive(false)
    setIsModalTrashActive(false)
  }

  return (
    <>
      <CardBoxModal
        title="Sample modal"
        buttonColor="info"
        buttonLabel="Done"
        isActive={isModalInfoActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>
    
      <CardBoxModal
        title="Please confirm"
        buttonColor="danger"
        buttonLabel="Confirm"
        isActive={isModalTrashActive}
        onConfirm={handleModalAction}
        onCancel={handleModalAction}
      >
        <p>
          Lorem ipsum dolor sit amet <b>adipiscing elit</b>
        </p>
        <p>This is sample modal</p>
      </CardBoxModal>

      <table>
        <thead>
          <tr>
            <th>Document No.</th>
            <th>Depratment</th>
            <th>Document Type</th>
            <th>Category</th>
            <th>Document Title</th>
            <th>Status</th>
            <th>Prepared By</th>
            <th>Created On</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {clientsPaginated.map((client: DocumentAttributes) => (
            <tr key={client.id}>
              <td data-label="DocumentNo.">{client.documentNo}</td>
              <td data-label="Department">{client.department}</td>
              <td data-label="DocumentType">{client.documentType}</td>
              <td data-label="Category">{client.category}</td>
              <td data-label="DocumentTitle">{client.documentTitle}</td>
              <td data-label="Status">{client.status}</td>
              <td data-label="PreparedBy">{client.preparedBy}</td>
              <td data-label="CreatedOn">{client.createdOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-0">
          <Buttons>
            {pagesList.map((page) => (
              <Button
                key={page}
                active={page === currentPage}
                label={page + 1}
                color={page === currentPage ? 'lightDark' : 'whiteDark'}
                small
                onClick={() => setCurrentPage(page)}
              />
            ))}
          </Buttons>
          <small className="mt-6 md:mt-0">
            Page {currentPage + 1} of {numPages}
          </small>
        </div>
      </div>
    </>
  )
}

export default LoadDrafts
