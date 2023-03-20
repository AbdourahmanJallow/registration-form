import { gql, useMutation } from '@apollo/client';

// Define mutation
const SIGN_UP = gql`
    mutation Mutation($studentData: StudentInput) {
    createStudent(studentData: $studentData) {
        code
        data {
        createdAt
        email
        firstName
        lastName
        matNumber
        profilePic
        updatedAt
        }
    }
    }
`;

export const LOG_IN = gql`
    mutation Login($credential: LoginInput) {
    login(credential: $credential) {
        code
        message
        success
        token
    }
}

`

export const updateStudentData = gql`
    mutation UpdateStudentData {
    updateStudentData {
        code
        message
        data {
        profilePic
        matNumber
        updatedAt
        lastName
        firstName
        email
        createdAt
        }
    }
}
`
export default SIGN_UP;