import React, { createContext,useState,useEffect } from 'react'
import { getEmployees } from '../utils/apiService'

export const AuthContext=createContext()

const AuthProvider=({children})=>{
    const[userData, setUserData]=useState(null)
    const[isLoading, setIsLoading]=useState(true)

    useEffect(()=>{
        const loadEmployees = async () => {
            try {
                // Get data from API
                const employees = await getEmployees()
                
                if(employees && employees.length > 0) {
                    setUserData(employees)
                } else {
                    console.warn('No employee data found in database')
                    setUserData([])
                }
            } catch (error) {
                console.error('Error loading user data:', error)
                setUserData([])
            } finally {
                setIsLoading(false)
            }
        }
        
        loadEmployees()
    },[])

    // Function to refresh user data
    const refreshUserData = async () => {
        try {
            const employees = await getEmployees()
            setUserData(employees || [])
        } catch (error) {
            console.error('Error refreshing user data:', error)
        }
    }

    return(
        <div> 
            <AuthContext.Provider value={[userData, setUserData, refreshUserData, isLoading]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider
