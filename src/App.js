import React from 'react';

import logo from './logo.svg';
import './App.css';
import { Btn } from './components/Btn';
import { Sessao } from './components/Section'
import { BsWhatsapp, BsLinkedin, BsGithub, BsWordpress, BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoTypescript, BiLogoGithub, BiLogoReact, BiLogoAngular, BiLogoVuejs, BiLogoPhp, BiLogoTailwindCss, BiLogoBootstrap, BiLogoGitlab } from 'react-icons/bi'
import { FaGitSquare } from 'react-icons/fa'
import { AiFillGitlab, AiFillCodepenCircle } from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
import { SiCsharp, SiExpress, SiDotnet, SiNestjs, SiAdonisjs, SiMysql, SiAmazonaws, SiMongodb, SiJquery } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { TbBrandNextjs } from 'react-icons/tb'

import career from './career.json'
import knight from './assets/knight.png'
import logoknight from './assets/logo/logo.svg'

function App() {

  console.log('career')

  function transformarQuebraDeLinhaEmParagrafo(texto) {
    // Substitui todas as ocorrências de <br /> por </p><p>
    var textoFormatado = texto.replace(/<br \/>/g, '</p><p class="leading-5 indent-6 text-justify">');

    // Adiciona as tags <p> no início e no final
    textoFormatado = `<p class='leading-5 indent-6 text-justify'>${textoFormatado}</p>`;

    // Renderiza o HTML usando dangerouslySetInnerHTML
    return <div className="flex flex-col text-sm text-gray-400 mb-1 mt-1 gap-3 text-left" dangerouslySetInnerHTML={{ __html: textoFormatado }} />;
  }

  function generateTechOutput(techArray) {
    return techArray.map((tech, index) => {
      const icon = techIconMap[tech.toLowerCase()];
      console.log(tech)
      if (icon) {
        return (
          <React.Fragment key={tech}>
            <span className='flex'>
              <span className='inline mt-1 '>{icon}</span>
              <span className='inline ml-1 mr-3'>{index < techArray.length ? ' ' + tech : ''}</span>
            </span>
          </React.Fragment>
        );
      }

    });
  }

  const techIconMap = {
    wordpress: <BsWordpress className='vrd-2' />,
    html: <BsFiletypeHtml className='vrd-2' />,
    css: <BsFiletypeCss className='vrd-2' />,
    php: <BiLogoPhp className='vrd-2' />,
    javascript: <BiLogoJavascript className='vrd-2' />,
    jquery: <SiJquery className='vrd-2' />,
    // Adicione mais mapeamentos conforme necessário
  };

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Main">
        <Sessao>
          <div className="flex items-center justify-center mr-auto ml-auto" style={{ maxWidth: '600px' }}>
            <div className="flex justify-center items-center flex-col p-5 rounded-md">
              <img id='knight' src={logoknight} />
              <h1 className="bg-opacity-70 bg-black p-3 borded mr-auto ml-auto w-full mt-1 mb-1 bg-transparency-2 text-3xl text-white rounded-md" style={{ fontSize: '2.575rem' }}>
                Victor Hugo Amorim Arruda
              </h1>
              <span className='bg-black bg-opacity-50 mt-1 mb-1 pr-4 pl-4 rounded-full'>
                <p className="mr-auto ml-auto w-full text-rose-500 text-3xl text-white" style={{ fontSize: '1.575rem' }}>
                  FullStack Developer
                </p>
              </span>
              <p className="flex justify-center items-center gap-2 mr-auto ml-auto w-full mt-2 white text-md text-white" style={{ fontSize: '2rem' }}>
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
          </div>
        </Sessao>
        <Sessao>
          <div className="flex w-full relative justify-center items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6">
            <div className="flex w-full absolute top-2 text-center" style={{ maxWidth: 600 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center text-2xl text-white">
                skills/bio
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
            <div className="flex flex-wrap w-full">
              <div className="flex items-center justify-center md:w-1/3 w-full">
                <img className='flex' src={knight} style={{ maxWidth: 300 }} />
              </div>
              <div className="md:w-2/3 sm:w-full white text-left pt-5 pb-6">
                <div className='flex'>
                  <h1 className="text-lx text-white mb-1 mt-4">JavaScript Developer</h1>
                </div>
                <p className="text-sm text-white pt-2 mb-2 max-w-xl">Profisional desenvolvedor desde <b>2019</b>, especialista na
                  criação de sites, <b>templates</b> e <b>plugins</b> para <b>wordpress</b>, aplicativos web em frameworks baseados
                  em <b>NodeJS</b>, atuando paralelamente como desenvolvedor na tecnologia <b>C#</b>.</p>
                <div className='flex flex-row gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm flex mb-1 text-white w-full'>primary stack</label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-2'>
                      <BiLogoJavascript className='text-white text-md' />
                      <FaNodeJs className='text-white text-md' />
                      <BiLogoTypescript className='text-white text-md' />
                      <BsWordpress className='text-white text-md' />
                      <BsFiletypeCss className='text-white text-md' />
                      <BsFiletypeHtml className='text-white text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm mb-1 text-white w-full'>secondary stack</label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-2'>
                      <SiCsharp className='text-white text-md' />
                      <SiDotnet className='text-white text-md' />
                      <BiLogoPhp className='text-white text-md' />
                      <SiMysql className='text-white text-md' />
                      <SiMongodb className='text-white text-md' />
                      <SiAmazonaws className='text-white text-md' />
                    </div>
                  </div>
                </div>
                <label className='text-sm mb-5 text-white w-full'>skills</label>
                <div className='flex flex-row gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-white w-full' style={{ fontSize: 9 }}>
                      back end
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-1'>
                      <SiExpress className='text-white text-md' />
                      <SiNestjs className='text-white text-md' />
                      <SiAdonisjs className='text-white text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-white w-full' style={{ fontSize: 9 }}>
                      front end
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-1'>
                      <BiLogoReact className='text-white text-md' />
                      <BiLogoAngular className='text-white text-md' />
                      <BiLogoVuejs className='text-white text-md' />
                      <TbBrandNextjs className='text-white text-md' />
                      <BiLogoTailwindCss className='text-white text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-white w-full' style={{ fontSize: 9 }}>
                      versioning
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3'>
                      <FaGitSquare className='text-white text-md' />
                      <BiLogoGithub className='text-white text-md' />
                      <BiLogoGitlab className='text-white text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-white w-full' style={{ fontSize: 9 }}>
                      graphic design
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3'>
                      <FiFigma className='text-white text-md' />
                      <DiPhotoshop className='text-white text-md' />
                      <DiIllustrator className='text-white text-md' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sessao>
        <Sessao>
          <div className="flex relative items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6 pt-4">
            <div className="flex w-full absolute top-2 text-center" style={{ width: 600 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center white text-2xl text-white">
                Carreira
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
            <span className='flex w-full mt-5 mb-3 mr-auto ml-auto' style={{ maxWidth: 300 , marginTop: 70 }}>
              <ol id="steppter" class="flex items-center w-full mr-auto ml-auto" style={{maxWidth: 300}}>
                <li class="flex w-full items-center">
                  <span class="flex items-center justify-center w-8 h-8 lrj-bg rounded-full shrink-0">
                    <span class="font-bold text-blue-800">2019</span>
                  </span>
                </li>
                <hr className='w-full border-2 lrj-bg'/>
                <li class="flex w-full items-center">
                  <span class="flex items-center justify-center w-8 h-8 lrj-bg rounded-full shrink-0">
                    <span class="font-bold text-blue-800">2019</span>
                  </span>
                </li>
                <hr className='w-full border-2 lrj-bg'/>
                <li class="flex w-full items-center">
                  <span class="flex items-center justify-center w-8 h-8 lrj-bg rounded-full shrink-0">
                    <span class="font-bold text-blue-800">2020</span>
                  </span>
                </li>
                <hr className='w-full border-2 lrj-bg'/>
                <li class="flex w-full items-center">
                  <span class="flex items-center justify-center w-8 h-8 lrj-bg rounded-full shrink-0">
                    <span class="font-bold text-blue-800">2021</span>
                  </span>
                </li>
                <hr className='w-full border-2 lrj-bg'/>
                <li class="flex w-full items-center ">
                  <span class="flex items-center justify-center w-8 h-8 lrj-bg  rounded-full shrink-0">
                    <span class="font-bold text-blue-800">2022</span>
                  </span>
                </li>
                <hr className='w-full border-2 lrj-bg'/>
                <li class="flex items-center">
                  <span class="flex items-center justify-center w-8 h-8 lrj-bg rounded-full shrink-0">
                    <span class="font-bold text-blue-800">2023</span>
                  </span>
                </li>
              </ol>
            </span>
            <div  className='flex w-full mt-2 mb-2 mr-auto ml-auto gap-3 justify-center' style={{maxWidth: 300}}>
              <button class="outline outline-offset-2 outline-1 border-gray-300 font-semibold w-5 h-5 rounded-full text-gray-300">1</button>
              <button class="outline outline-offset-2 outline-1 border-gray-300 font-semibold w-5 h-5 rounded-full text-gray-300">2</button>
              <button class="outline outline-offset-2 outline-1 border-gray-300 font-semibold w-5 h-5 rounded-full text-gray-300">3</button>
              <button class="outline outline-offset-2 outline-1 border-gray-300 font-semibold w-5 h-5 rounded-full text-gray-300">4</button>
              <button class="outline outline-offset-2 outline-1 border-gray-300 font-semibold w-5 h-5 rounded-full text-gray-300">5</button>
            </div>
            <div className="md:w-2/3 white text-left pt-2 pb-3 mr-auto ml-auto" style={{ maxWidth: 650 }}>
              <hr className='w-full mt-1 mb-3' />
              <p className="text-xl lrj mb-1 mt-1 text-left">{career.d2023.services[3].title}</p>
              <p className="flex text-md mb-1 mt-1 text-left text-justify bold text-white font-semibold azl">{career.d2023.services[3].service}</p>
              <p className="flex text-sm mb-1 mt-1 text-left text-left text-white text-lg flex-wrap font-medium vrd">
                {generateTechOutput(career.d2023.services[3].techs)}
              </p>
              <hr className='w-full mt-3 mb-3' />
              <div className="text-gray-200">{transformarQuebraDeLinhaEmParagrafo(career.d2023.services[3].description)}</div>
            </div>
          </div>
        </Sessao>
        <Sessao>
          <div className="flex relative justify-center items-center flex-col mr-auto ml-auto">
            <div className="flex w-full absolute top-2 text-center" style={{ width: 600 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center white text-2xl text-white">
                Portfólio
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
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
