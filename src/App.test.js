import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

test('Switches image upon clicking', () => {
  render(<App />)
  const dogImg = screen.getByAltText(/My dog, Beany/i)
  fireEvent.click(dogImg)

  const notDogImg = screen.getByAltText(/Rainbow frowny face/i)
  expect(notDogImg).toBeInTheDocument()
})