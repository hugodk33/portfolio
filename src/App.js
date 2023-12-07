import React, { useState, useEffect, useRef } from 'react';

import LogoAnima from './logo.js';
import './App.css';
import { Btn } from './components/Btn';
import { Sessao } from './components/Section'
import { BsWhatsapp, BsLinkedin, BsGithub, BsWordpress, BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoTypescript, BiLogoGithub, BiLogoReact, BiLogoAngular, BiLogoVuejs, BiLogoPhp, BiLogoTailwindCss, BiLogoBootstrap, BiLogoGitlab } from 'react-icons/bi'
import { FaGitSquare } from 'react-icons/fa'
import { AiFillGitlab, AiFillCodepenCircle } from 'react-icons/ai'
import { HiOutlineMail, HiOutlineUserCircle, HiOutlineIdentification, HiOutlineFastForward } from 'react-icons/hi'
import { SiCsharp, SiExpress, SiDotnet, SiNestjs, SiAdonisjs, SiMysql, SiAmazonaws, SiMongodb, SiJquery } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { DiPhotoshop, DiIllustrator } from 'react-icons/di'
import { FiFigma } from 'react-icons/fi'
import { TbBrandNextjs, TbWorldWww } from 'react-icons/tb'
import { GoAlert } from "react-icons/go";
import { RiToolsLine } from "react-icons/ri";

import career from './career.json'
import knight from './assets/knight.png'
import huguim from './img/huguim.jpg'
import logobranca from './assets/logo/logo-branca-01.svg'
import sign from './assets/logo/sign-01.svg'

function App() {

  const [timeLine,] = useState(career)
  const [actualTime, setActualTime] = useState(timeLine.carrer.length - 1)
  const [actualService, setActualService] = useState(0)
  const [pageScroll, setPageScroll] = useState([true, false, false, false]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [arrayMenu, setArrayMenu] = useState([]);
  const [arrayMenu2, setArrayMenu2] = useState([]);

  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const checkPosition = () => {
    if (myRef.current || myRef1.current || myRef2.current || myRef3.current) {
      const rect = myRef.current.getBoundingClientRect();
      const rect1 = myRef1.current.getBoundingClientRect();
      const rect2 = myRef2.current.getBoundingClientRect();
      const rect3 = myRef3.current.getBoundingClientRect();

      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      if (rect.top >= 0 && rect.bottom <= windowHeight) {
        setPageScroll([true, false, false, false])
      } else if (rect1.top >= 0 && rect1.bottom <= windowHeight - 20) {
        setPageScroll([false, true, false, false])
        setArrayMenu([])
        setArrayMenu2([])
      } else if (rect2.top >= 0 && rect2.bottom <= windowHeight - 20) {
        setPageScroll([false, false, true, false])
      } else if (rect3.top >= 0 && rect3.bottom <= windowHeight - 20) {
        setPageScroll([false, false, false, true])
      }
    }
  };

  function changeTimeLine(value) {
    setActualTime(value)
    setActualService(0)
  }

  function transformarQuebraDeLinhaEmParagrafo(texto) {
    var textoFormatado = texto.replace(/<br \/>/g, '</p><p className="leading-5 indent-6 text-justify">');
    textoFormatado = `<p className='leading-5 indent-6 text-justify'>${textoFormatado}</p>`;
    return <div className="flex flex-col text-sm text-gray-400 mb-1 mt-1 gap-3 text-left" dangerouslySetInnerHTML={{ __html: textoFormatado }} />;
  }

  function generateTechOutput(techArray) {
    return techArray.map((tech, index) => {
      const icon = techIconMap[tech.toLowerCase()];
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

  function urlGoTo(novaParteDaUrl) {
    // Obtenha a URL atual sem a parte após o '#'
    let urlAtual = window.location.href.split('#')[0];

    // Adicione a nova parte da URL
    let novaUrl = urlAtual + '#' + novaParteDaUrl;

    // Restante do seu código
    if (novaParteDaUrl === 'inicio') {
      setPageScroll([true, false, false, false]);
    } else if (novaParteDaUrl === 'portfolio') {
      setPageScroll([false, true, false, false]);
      setArrayMenu([]);
      setArrayMenu2([]);
    } else if (novaParteDaUrl === 'carreira') {
      setPageScroll([false, false, true, false]);
    } else if (novaParteDaUrl === 'outra-coisa') {
      setPageScroll([false, false, false, true]);
    }

    // Redireciona para a nova URL
    window.location.href = novaUrl;
  }

  const techIconMap = {
    wordpress: <BsWordpress className='vrd-2' />,
    html: <BsFiletypeHtml className='vrd-2' />,
    css: <BsFiletypeCss className='vrd-2' />,
    php: <BiLogoPhp className='vrd-2' />,
    javascript: <BiLogoJavascript className='vrd-2' />,
    typescript: <BiLogoTypescript className='vrd-2' />,
    jquery: <SiJquery className='vrd-2' />,
    tailwind: <BiLogoTailwindCss className='vrd-2' />,
    node: <FaNodeJs className='vrd-2' />,
    mysql: <SiMysql className='vrd-2' />,
    aws: <SiAmazonaws className='vrd-2' />,
    adonis: <SiAdonisjs className='vrd-2' />,
    next: <TbBrandNextjs className='vrd-2' />,
    react: <BiLogoReact className='vrd-2' />,
    csharp: <SiCsharp className='vrd-2' />,
    dotnet: <SiDotnet className='vrd-2' />,
    express: <SiExpress className='vrd-2' />
  };

  const bannerMenu = [
    {
      label: 'bio & skills',
      link: '#bio'
    },
    {
      label: 'Carreira',
      link: '#carreira'

    },
    {
      label: 'Portfólio',
      link: '#portfolio'
    },
    {
      label: 'Curriculo',
      link: '#'
    }
  ];

  const bannerMenu2 = [
    {
      label: 'wpp',
      link: 'https://wa.me/5585997313090?text=Hello!'
    },
    {
      label: 'linkedin',
      link: 'https://www.linkedin.com/in/hugo-arruda-852aa8161/'
    },
    {
      label: 'github',
      link: 'https://github.com/hugodk33'
    },
    {
      label: 'gitlab',
      link: 'https://gitlab.com/hugodk33'
    },
    {
      label: 'codepen',
      link: 'https://codepen.io/hugodk33'
    },
    {
      label: 'email',
      link: 'mailto:hugodk33@gmail.com'
    },
  ];

  const iconMap = {
    wpp: <BsWhatsapp style={{ fontSize: '0.6em' }} />,
    linkedin: <BsLinkedin style={{ fontSize: '0.6em' }} />,
    github: <BsGithub style={{ fontSize: '0.6em' }} />,
    gitlab: <AiFillGitlab style={{ fontSize: '0.6em' }} />,
    codepen: <AiFillCodepenCircle style={{ fontSize: '0.6em' }} />,
    email: <HiOutlineMail style={{ fontSize: '0.6em' }} />,
  };

  // new URL("/", baseUrl)

  useEffect(() => {
    const handleScroll = () => {
      checkPosition();
    };

    window.addEventListener('scroll', handleScroll);
    checkPosition();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const onPageLoad = () => {
      setPageLoaded(true);
    };
    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad, false);

      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  useEffect(() => {
    if (arrayMenu.length < 3 && pageScroll[0] === true) {
      const MenuDump = bannerMenu[arrayMenu.length];

      const timerId = setTimeout(() => {
        setArrayMenu((prevArray) => [...prevArray, MenuDump]);
      }, 300);

      return () => clearTimeout(timerId);
    }
  }, [arrayMenu, pageScroll]);

  useEffect(() => {
    if (arrayMenu2.length < 6 && pageScroll[0] === true) {
      const MenuDump = bannerMenu2[arrayMenu2.length];
      const icon = iconMap[MenuDump.label];

      const timerId = setTimeout(() => {
        setArrayMenu2((prevArray) => [...prevArray, { ...MenuDump, icon }]);
      }, 200);

      return () => clearTimeout(timerId);
    }
  }, [arrayMenu2, pageScroll]);

  useEffect(() => {
    // console.log('arrayMenu2')
    // console.log(arrayMenu2)
  }, [arrayMenu2])

  return (
    <div className="App flex flex-row">
      <header className="App-header">
      </header>
      <nav class="bg-black flex flex-col border-gray-200 fixed" style={{ width: 30, height: "100vh", paddingTop: 7, shadow: "2px 2px 3px black" }}>
        <img src={logobranca} className='mr-auto ml-auto' style={{ width: 15 }} />
        <span className='flex flex-wrap text-white gap-2 w-full pt-1 mt-3 mr-auto ml-auto' style={{ height: 70 }}>
          <button className={pageScroll[0] ? "flex justify-center items-center azl-bg w-full h-5 " : null + ' mr-auto ml-auto text-white w-full h-5'} onClick={() => urlGoTo("inicio")}>
            <HiOutlineIdentification className={pageScroll[0] ? " text-black " : " azl " + "mr-auto ml-auto shadow"} />
            {pageScroll[0] ? <img src={sign} className="absolute" style={{ right: "-7px", width: 7 }} /> : null}
          </button>
          <button className={pageScroll[1] ? "flex justify-center items-center azl-bg w-full h-5 " : null + ' mr-auto ml-auto text-white w-full h-5'} onClick={() => urlGoTo("bio")}>
            <HiOutlineUserCircle className={pageScroll[1] ? " text-black " : " azl " + "mr-auto ml-auto shadow"} />
            {pageScroll[1] ? <img src={sign} className="absolute" style={{ right: "-7px", width: 7 }} /> : null}
          </button>
          <button className={pageScroll[2] ? "flex justify-center items-center azl-bg w-full h-5 " : null + ' mr-auto ml-auto text-white w-full h-5'} onClick={() => urlGoTo("carreira")}>
            <HiOutlineFastForward className={pageScroll[2] ? " text-black " : " azl " + "mr-auto ml-auto shadow"} />
            {pageScroll[2] ? <img src={sign} className="absolute" style={{ right: "-7px", width: 7 }} /> : null}
          </button>
        </span>
      </nav>
      <div className="Main w-full" style={{ marginLeft: 30 }}>
        <Sessao>
          <div id="inicio" className="flex items-center justify-center mr-auto ml-auto overflow-hidden" style={{ maxWidth: '600px' }} ref={myRef}>
            <div className="flex justify-center items-center flex-col p-5 rounded-md">
              {pageScroll[0] && pageLoaded ?
                <>
                  <LogoAnima />
                  <h1 id="header-1" className="bg-opacity-70 bg-black px-3 py-0 borded mr-auto ml-auto w-full mt-1 mb-1 bg-transparency-2 text-2xl text-white rounded-md">
                    Victor Hugo Amorim Arruda
                  </h1>
                  <span className='bg-black bg-opacity-50 mt-1 mb-1 pr-4 pl-4 rounded-md'>
                    <p id="header-2" className="mr-auto ml-auto w-full azl text-rose-500 text-xl text-white">
                      - softwareDeveloper -
                    </p>
                  </span>
                  <span id="header-3" className='flex gap-2 mt-1 mb-1'>
                    {
                      arrayMenu.map((a, b) => (
                        <button className='btn bg-gray-800 text-white px-3 py-1 rounded-md text-sm' onClick={() => urlGoTo(a.link)} style={{ fontSize: 10 }}>
                          {a.label}
                        </button>
                      ))
                    }
                  </span>
                  <p id="header-4" className="flex justify-center items-center gap-2 mr-auto ml-auto w-full mt-2 white text-md text-white" style={{ fontSize: '2rem' }}>
                    {
                      arrayMenu2.map((item, index) => (
                        <a className={"flex p-2 bg-opacity-75 bg-blue-600 rounded-full text-xl"} key={index} href={item.link}>
                          {item.icon}
                        </a>
                      ))
                    }
                  </p>
                </>
                : null
              }
            </div>
          </div>
        </Sessao>
        <Sessao>
          <div id="bio" className="flex w-full relative justify-center items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6 overflow-hidden" ref={myRef1}>
            <div className="flex w-full absolute top-2 text-center" style={{ maxWidth: 600, zIndex: 10 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center text-2xl text-white">
                skills/bio
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
            <div className="flex flex-wrap w-full" style={{ zIndex: 10 }}>
              <div className="flex items-center justify-center md:w-1/3 w-full md:p-10 sm:p-0">
                <img className='flex rounded-full w-full border-2 border-white avatar' src={huguim} />
              </div>
              <div className="md:w-2/3 sm:w-full white text-left pt-5 pb-6">
                <div className='flex'>
                  <h1 className="text-xl mb-1 mt-4 text-white tracking-widest text-blue-300">JavaScript Developer</h1>
                </div>
                <p className="text-sm text-gray-400 pt-2 mb-2 max-w-xl">Profisional desenvolvedor desde <b>2019</b>, especialista na
                  criação de sites, <b>templates</b> e <b>plugins</b> para <b>wordpress</b>, aplicativos web em frameworks baseados
                  em <b>NodeJS</b>, atuando paralelamente como desenvolvedor na tecnologia <b>C#</b>.</p>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm flex mb-1 text-white w-full azl'>primary stack</label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-2'>
                      <BiLogoJavascript className='text-blue-300 text-md' />
                      <FaNodeJs className='text-blue-300 text-md' />
                      <BiLogoTypescript className='text-blue-300 text-md' />
                      <BsWordpress className='text-blue-300 text-md' />
                      <BsFiletypeCss className='text-blue-300 text-md' />
                      <BsFiletypeHtml className='text-blue-300 text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-sm mb-1 text-white w-full azl'>secondary stack</label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-2'>
                      <SiCsharp className='text-blue-300 text-md' />
                      <SiDotnet className='text-blue-300 text-md' />
                      <BiLogoPhp className='text-blue-300 text-md' />
                      <SiMysql className='text-blue-300 text-md' />
                      <SiMongodb className='text-blue-300 text-md' />
                      <SiAmazonaws className='text-blue-300 text-md' />
                    </div>
                  </div>
                </div>
                <label className='text-sm mb-5 azl w-full'>skills</label>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='vrd-2 w-full' style={{ fontSize: 9 }}>
                      back end
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-1'>
                      <SiExpress className='text-blue-300 text-md' />
                      <SiNestjs className='text-blue-300 text-md' />
                      <SiAdonisjs className='text-blue-300 text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='vrd-2 w-full' style={{ fontSize: 9 }}>
                      front end
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3 mb-1'>
                      <BiLogoReact className='text-blue-300 text-md' />
                      <BiLogoAngular className='text-blue-300 text-md' />
                      <BiLogoVuejs className='text-blue-300 text-md' />
                      <TbBrandNextjs className='text-blue-300 text-md' />
                      <BiLogoTailwindCss className='text-blue-300 text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='vrd-2 w-full' style={{ fontSize: 9 }}>
                      versioning
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3'>
                      <FaGitSquare className='text-blue-300 text-md' />
                      <BiLogoGithub className='text-blue-300 text-md' />
                      <BiLogoGitlab className='text-blue-300 text-md' />
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='vrd-2 w-full' style={{ fontSize: 9 }}>
                      graphic design
                    </label>
                    <hr className="w-full" />
                    <div className='flex flex-row gap-3'>
                      <FiFigma className='text-blue-300 text-md' />
                      <DiPhotoshop className='text-blue-300 text-md' />
                      <DiIllustrator className='text-blue-300 text-md' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Sessao>
        <Sessao>
          <div id="carreira" className="flex relative items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6 pt-4 overflow-hidden" ref={myRef2}>
            <div className="flex w-full absolute top-2 text-center" style={{ width: 600 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center white text-2xl text-white">
                Carreira
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
            <span className='flex w-full mt-5 mb-3 mr-auto ml-auto' style={{ maxWidth: 180, marginTop: 70 }}>
              <ol id="steppter" className="flex items-center w-full mr-auto ml-auto" style={{ maxWidth: 300 }}>
                {
                  timeLine.carrer.map((a, b) => {
                    switch (b) {
                      case 0:
                      case 1:
                        return (
                          <React.Fragment key={b}>
                            <li className="flex w-full items-center" onClick={() => changeTimeLine(b)}>
                              <span className={"flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shrink-0" + (b < actualTime ? ' bg-green-300 ' : b === actualTime ? ' bg-gradient-to-b from-cyan-500 to-blue-700 border-white border-2 ' : ' bg-gray-200')}>
                                <span className={"font-bold" + (b < actualTime ? ' text-blue-700 ' : b === actualTime ? ' text-white font-bolder' : ' text-blue-800 ')} style={{ lineHeight: 1 }}>{a.year}</span>
                              </span>
                            </li>
                            <hr className={'w-full border-2' + (b < actualTime ? ' border-green-300 ' : b === actualTime ? ' border-white' : ' border-gray-200 ')} />
                          </React.Fragment>
                        );
                      default:
                        return (
                          <React.Fragment key={b}>
                            <li className="flex w-full items-center" onClick={() => setActualTime(b)}>
                              <span className={"flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full shrink-0" + (b < actualTime ? ' bg-green-300 ' : b === actualTime ? ' bg-gradient-to-b from-cyan-500 to-blue-700 border-white border-2 ' : ' bg-gray-200')}>
                                <span className={"font-bold" + (b < actualTime ? ' text-blue-700 ' : b === actualTime ? ' text-white font-bolder' : ' text-blue-800 ')}>{a.year}</span>
                              </span>
                            </li>
                          </React.Fragment>
                        );
                    }
                  })
                }

              </ol>
            </span>
            <div className='flex w-full mt-2 mb-2 mr-auto ml-auto gap-3 justify-center' style={{ maxWidth: 300 }}>
              {
                timeLine.carrer[actualTime].services.map((a, b) => {
                  return (
                    <button key={'timeline-' + b} className={"outline outline-offset-2 outline-1 border-gray-300 font-semibold w-5 h-5 rounded-full text-gray-300" + (b === actualService ? ' bg-blue-500 ' : ' ')} onClick={() => setActualService(b)}>{b + 1}</button>
                  )
                })
              }
            </div>
            <div className="md:w-2/3 white text-left pt-2 pb-3 mr-auto ml-auto" style={{ maxWidth: 650 }}>
              <hr className='w-full mt-1 mb-3 vrd' />
              <p className="text-xl text-white mb-1 mt-1 text-left tracking-widest">{timeLine.carrer[actualTime].services[actualService].title}</p>
              <p className="flex text-md mb-1 mt-1 text-left text-justify bold text-white font-semibold azl">{timeLine.carrer[actualTime].services[actualService].service}</p>
              <p className="flex text-sm mb-1 mt-1 text-left text-left text-white text-lg flex-wrap font-medium vrd">
                {generateTechOutput(timeLine.carrer[actualTime].services[actualService].techs)}
              </p>
              <hr className='w-full mt-3 mb-1 vrd' />
              {
                timeLine.carrer[actualTime].services[actualService].challenge ?
                  <>
                    <label className='text-blue-300 mt-1 uppercase' style={{ fontSize: 9 }}>desafio:</label>
                    <div className="flex items-center azl-bg text-white px-2 py-1 mt-1 mb-2 uppercase" style={{ fontSize: 10 }} role="alert">
                      <GoAlert className='text-white text-2xl mr-2' />
                      <p>{timeLine.carrer[actualTime].services[actualService].challenge}</p>
                    </div>
                  </>
                  : null
              }
              <label className='text-blue-300 mt-1 uppercase' style={{ fontSize: 9 }}>descrição:</label>
              <div className="text-gray-200">{transformarQuebraDeLinhaEmParagrafo(timeLine.carrer[actualTime].services[actualService].description)}</div>
              {
                timeLine.carrer[actualTime].services[actualService].link ?
                  <a
                    href={timeLine.carrer[actualTime].services[actualService].link}
                    target="_blank" rel="noopener noreferrer"
                    className='flex flex-row bg-blue-600 text-white py-2 mt-2 px-5 rounded-full'
                    style={{ maxWidth: '130px' }}
                  >
                    <TbWorldWww className='mr-2 text-xl' style={{ marginTop: '2px' }} />
                    ver site.
                  </a>
                  : null
              }
            </div>
          </div>
        </Sessao>
        <Sessao>
          <div id="portfolio" className="flex relative justify-center items-center flex-col mr-auto ml-auto overflow-hidden" ref={myRef3}>
            <div className="flex w-full absolute top-2 text-center" style={{ width: 600 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center white text-2xl text-white">
                Portfólio
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
            <div className="flex flex-col gap-3 mr-auto ml-auto w-full mt-4 white text-xl text-center justify-center items-center text-white p-5" style={{ border: "3px dotted gray" }}>
              <RiToolsLine className='text-3xl' />
              <h1>área em <br />manutenção</h1>
            </div>
          </div>
        </Sessao>
      </div>
    </div>
  );
}

export default App;
