import { createContext, useState } from "react"
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is a feedback item (1)',
      rating: 3
    },
    {
      id: 2,
      text: 'This is a feedback item (2)',
      rating: 5
    },
    {
      id: 3,
      text: 'This is a feedback item (3)',
      rating: 8
    },
  ])

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Add feedback item
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  // Delete feedback item
  const deleteFeedback = (id) => {
    if(window.confirm('Are you sure you want to delete this entry?')){
        setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update a feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(feedback.map((item) => item.id === id ? 
      { ...item, ...updatedItem } : item))
    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  // Edit a feedback item
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    <FeedbackContext.Provider 
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext