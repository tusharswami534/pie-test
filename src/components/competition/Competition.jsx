import React from 'react'
import { COMPETITION_LIST } from '../../utils/helper'

const Competition = () => {
  return (
    <div className='min-vh-100 py-5 d-flex competition-section justify-content-center align-items-center'>
        <div className='competition-container row row-gap-4'>
          <div className='col-lg-6 col-12'>
          <h1 className="text-white common-heading">Competition</h1>
              <p className="m-0 text-white competition-text common-description">
              Given our best in class offering, we need to cut through by opting for penetration pricing.
              </p>
              <p className="m-0 mt-2 text-white competition-text common-description">
              This will allow us to disrupt an established market by introducing our product and service at a lower price to entice new customers to purchase or subscribe. This strategy will help us capture the attention of this very large audience in need of a good solution.
              </p>
              <p className="m-0 mt-2 text-white competition-text common-description">
              The current return and refund process centres around either traditional advice or software. By combining both together for an aggressively affordable fee, we think we can capture much of the demand for those people that feel competent in managing their own refunds / returns.
              </p>
              <p className="m-0 mt-2 text-white competition-text common-description">
              As well as being the cheapest in market, our product offers everything a sole trader needs in one place, whilst pricing innovation of zero commission rather than a commission, will drive customers that are particularly price sensitive.
              </p>
          </div>
          <div className="col-12 col-lg-6 table-bg d-flex border-radius-xl align-items-center justify-content-center sm-py-xl overflow-hidden">
                      <div className="d-flex align-items-center justify-content-center w-100">
                          <div className="table-responsive"> 
                              <table className="custom-table-bg py-5">
                                  <thead>
                                      <tr>
                                          <th class=" d-sm-table-cell"></th>
                                          <th className="x-radius-top text-center bg-white table-heading">Rift</th>
                                          <th className="x-radius-top text-center bg-white table-heading">Taxscout</th>
                                          <th className="x-radius-top text-center bg-white table-heading">Coconut</th>
                                          <th className="x-radius-top text-center bg-dark-aqua table-heading">Pie</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      {COMPETITION_LIST.map((item, i) => (
                                          <tr key={i}>
                                              <td className={`text-white fw-normal Competition-td bg-transparent border-b-none ${i === 3 ? 'max-w-sm' : ''}`}>{item.brand}</td>
                                              <td className={`bg-white Competition-td border-b-none text-center fee-heading ${i === 5 ? 'x-radius-bottom ' : ''} `}>{item.rift}</td>
                                              <td className={`bg-white Competition-td border-b-none text-center fee-heading ${i === 5 ? 'x-radius-bottom ' : ''} `}>{item.taxscout}</td>
                                              <td className={`bg-white Competition-td border-b-none text-center fee-heading ${i === 5 ? 'x-radius-bottom ' : ''}`}>{item.coconut}</td>
                                              <td className={`bg-dark-aqua Competition-td border-b-none text-center fee-heading ${i === 5 ? 'x-radius-bottom px-sm' : ''}`}>{item.pie}</td>
                                          </tr>
                                      ))}
                                  </tbody>
                              </table>
                          </div>
                      </div>
          </div>
        </div>
    </div>
  )
}

export default Competition
