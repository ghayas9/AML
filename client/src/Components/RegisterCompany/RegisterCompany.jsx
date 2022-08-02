import React from 'react'
import '../RegisterCompany/RegisterCompany.css';
import RegisterCompaniesNavbar from '../RegisterCompaniesNavbar/RegisterCompaniesNavbar';
import { Table } from 'reactstrap';
import { useNavigate } from 'react-router-dom';

const RegisterCompany = () => {

    const navigate = useNavigate()

    const CompaniesData = [
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
        {
            companyName: 'Test Company',
            companyEmail: 'testcompany@gmail.com',
            createdAt: '13/6/2022 3:10'
        },
    ]

  return (
    <div>
        <div>
           <RegisterCompaniesNavbar/>
        </div>
        <div className='registerCompanies_main_div'>
            <div className='RegisterCompaniesTitle'>
                Register Companies
            </div>
            <div className='companyList_main'>
                <div className='companyList_Header'>
                    <div className='CompanyName_heading'>
                        Company Name
                    </div>
                    <div className='Email_heading'>
                        Email
                    </div>
                    <div className='Created_heading'>
                        Created
                    </div>
                </div>
                {
                    CompaniesData.map((item) => {
                        return (
                            <div className='CompaniesList_main' onClick={() => navigate('/companydetails')}>
                            <div className='testCompany_div'>
                                {item.companyName}
                            </div>
                            <div className='email_id_div'>
                                {item.companyEmail}
                            </div>
                            <div className='createdAt_div'>
                                {item.createdAt}
                            </div>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default RegisterCompany