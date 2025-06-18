import Button from '../components/ui/Button'

const Commingsoon = () => {
  return (
    <main className='h-screen flex justify-center items-center text-center'>
      <div>
        <p className='text-9xl mb-4'>👻</p>
        <h1 className='text-4xl md:text-9xl font-extrabold mb-8'>
          Comming Soon
        </h1>

        <Button to='/' variant='outline' size='sm'>
          Back to Home
        </Button>
      </div>
    </main>
  )
}

export default Commingsoon
