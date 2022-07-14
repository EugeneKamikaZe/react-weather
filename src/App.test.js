import App from './App'
import '@testing-library/jest-dom/extend-expect'
import {render, screen} from '@testing-library/react'

describe('App component', () => {
    test('it renders', () => {
        render(<App />)

        expect(screen.getByRole('form', {})).toBeInTheDocument()
    })
})
