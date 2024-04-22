import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className='container h-screen'>
      <div className='h-full flex justify-center items-center'>
        <div className='bg-card w-fit h-fit flex justify-center items-center rounded-md py-14 px-14'>
          <div>
            <h1 className='text-5xl'>Ingresar</h1>
            <p className='text-xl'>
              Inicia sesión para poder adoptar un perro.
            </p>
            <form className='flex flex-col gap-4 w-[50%]'>
              <input
                type='email'
                placeholder='Correo electrónico'
                className='border border-gray-300 px-3 py-2 rounded-lg'
              />
              <input
                type='password'
                placeholder='Contraseña'
                className='border border-gray-300 px-3 py-2 rounded-lg'
              />
              <Link href='/admin'>
                <button className='bg-primary text-white hover:bg-purple-800 transition-all duration-300 w-fit px-5 py-2 rounded-lg'>
                  Ingresar
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
