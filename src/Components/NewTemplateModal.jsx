import React from 'react'

export default function NewTemplateModal(template) {
  return (
    <div onClick={template.click}>
        <form>
            <label htmlFor='title'>Title</label>
            <input type="text" name="title" placeholder='title' />
        </form>
    </div>
  )
}

