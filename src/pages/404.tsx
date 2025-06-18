import Button from '../components/ui/Button'

const NotFound = () => {
  return (
    <main className='h-screen flex justify-center items-center text-center'>
      <div>
        <p className='text-9xl mb-4'>🐝</p>
        <h1 className='text-9xl font-extrabold'>404</h1>
        <p className='mb-4'>where are you going?</p>

        <Button to='/' variant='outline' size='sm'>
          Back to Home
        </Button>
      </div>
    </main>
  )
}

export default NotFound
