import qr from './assets/image-qr-code.png'

export default function App() {
  return (
    <div className='bg-[#D5E1EF] min-h-screen flex items-center justify-center'>
      <div className='bg-white w-[320px] rounded-[20px] p-4 pb-10 shadow-xl text-center'>
        <img src={qr} alt='qr' className='rounded-[20px] w-full'></img>
        <div className='pl-4 pr-4 pt-6'>
          <h1 className='mb-4 text-[20px] text-[#1F314F] font-bold leading-tight'>
            Improve your front-end skills by building projects
          </h1>
          <p className='text-[14px] text-[#68778D]'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </p>
        </div>
      </div>
    </div>
  )
}
