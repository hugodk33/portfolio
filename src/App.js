import logo from './logo.svg';
import './App.css';
import { Btn } from './components/Btn';
import { Sessao } from './components/Section'
import { BsWhatsapp, BsLinkedin, BsGithub } from 'react-icons/bs'
import { AiFillGitlab, AiFillCodepenCircle , AiOutlineMail } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import knight from './assets/knight.png'
import logoknight from './assets/logo/logo.svg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Main">
        <Sessao>
          <div className="flex justify-center items-center flex-col mr-auto ml-auto" style={{ maxWidth: '600px' }}>
            <img id='knight' src={logoknight} /> 
            <h1 className="borded mr-auto ml-auto w-full mt-2 bg-transparency-2 text-3xl text-white" style={{ fontSize: '2.575rem' }}>
              Victor Hugo Amorim Arruda
            </h1>
            <span className='bg-black bg-opacity-50 mt-6 mb-1 pr-4 pl-4 rounded-full'>
              <p className="mr-auto ml-auto w-full text-rose-500 text-3xl text-white" style={{ fontSize: '1.575rem' }}>
                FullStack Developer
              </p>
            </span>
            <p className="flex justify-center items-center gap-2 mr-auto ml-auto w-full mt-4 white text-md text-white" style={{ fontSize: '2rem' }}>
              <Btn>
                <BsWhatsapp style={{ fontSize: '0.6em' }} />
              </Btn>
              <Btn>
                <BsLinkedin style={{ fontSize: '0.6em' }} />
              </Btn>
              <Btn>
                <BsGithub style={{ fontSize: '0.6em' }} />
              </Btn>
              <Btn>
                <AiFillGitlab style={{ fontSize: '0.6em' }} />
              </Btn>
              <Btn>
                <AiFillCodepenCircle style={{ fontSize: '0.6em' }} />
              </Btn>
              <Btn>
                <HiOutlineMail style={{ fontSize: '0.6em' }} />
              </Btn>
            </p>
          </div>
        </Sessao>
        <Sessao>
          <div className="flex justify-center items-center flex-col mr-auto ml-auto" style={{ maxWidth: '600px' }}>
            <h1 className="mr-auto ml-auto w-full mt-4 white text-3xl text-white">
              skills/bio
            </h1>
            <p className="mr-auto ml-auto w-full mt-4 white text-md text-white">
              sub-texto
            </p>
          </div>
        </Sessao>
        <Sessao>
          <div className="flex justify-center items-center flex-col mr-auto ml-auto" style={{ maxWidth: '600px' }}>
            <h1 className="mr-auto ml-auto w-full mt-4 white text-3xl text-white">
              Portfólio
            </h1>
            <p className="mr-auto ml-auto w-full mt-4 white text-md text-white">
              sub-texto
            </p>
          </div>
        </Sessao>
        <Sessao>
          <div className="flex justify-center items-center flex-col mr-auto ml-auto" style={{ maxWidth: '600px' }}>
            <h1 className="mr-auto ml-auto w-full mt-4 white text-3xl text-white">
              Carreira
            </h1>
            <p className="mr-auto ml-auto w-full mt-4 white text-md text-white">
              sub-texto
            </p>
          </div>
        </Sessao>
      </div>
    </div>
  );
}

export default App;
