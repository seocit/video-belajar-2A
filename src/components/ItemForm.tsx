import { Button, Input, Modal, TextInput } from '@mantine/core'


const ItemForm = () => {  
  
  return (

        <div className='flex flex-col gap-3'>
          <TextInput label='Judul Video' placeholder='input judul' />
          <TextInput label='Deskripsi' placeholder='i nput Description' />
          <TextInput label='Mentor' placeholder='input judul' />
          <TextInput label='Price' placeholder='input judul' />
          <Button>Submit</Button>
        </div>
      

  )
}

export default ItemForm