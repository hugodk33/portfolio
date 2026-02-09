import React, { useState, useEffect, useRef } from 'react';

import LogoAnimaAsci from './LOGO-ASCI/logoasci.json'
import './App.css';
import { Sessao } from './components/Section'
import { BsWhatsapp, BsLinkedin, BsGithub, BsWordpress, BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoTypescript, BiLogoGithub, BiLogoReact, BiLogoAngular, BiLogoVuejs, BiLogoPhp, BiLogoTailwindCss, BiLogoBootstrap, BiLogoGitlab } from 'react-icons/bi'
import { FaGitSquare , FaCloudUploadAlt } from 'react-icons/fa'
import { AiFillGitlab, AiFillCodepenCircle } from 'react-icons/ai'
import { HiOutlineMail, HiOutlineUserCircle, HiOutlineIdentification, HiOutlineFastForward } from 'react-icons/hi'
import { SiCsharp, SiExpress, SiDotnet, SiNestjs, SiAdonisjs, SiMysql, SiAmazonaws , SiJquery , SiDocker } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandNextjs, TbWorldWww } from 'react-icons/tb'
import { GoAlert } from "react-icons/go";
import { RiToolsLine } from "react-icons/ri";

import career from './career.json'
import knight from './assets/knight.png'
import huguim from './img/huguim.png'
import logobranca from './assets/logo/logo-branca-01.svg'
import sign from './assets/logo/sign-01.svg'
import curriculo from './assets/curriculo-victor-hugo.pdf'

function App() {

  const [frame, setFrame] = useState(0)
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
    let urlAtual = window.location.href.split('#')[0];
    let novaUrl = urlAtual + '#' + novaParteDaUrl;
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
      label: 'Bio',
      link: '#bio'
    },
    {
      label: 'TimeLine',
      link: '#carreira'

    },
    {
      label: 'Portfolio',
      link: '#portfolio'
    }
  ];

  
  // {
  //   label: 'Curriculo',
  //   link: '/assets/curriculo-victor-hugo.pdf'
  // }

  const bannerMenu2 = [
    {
      label: 'wpp',
      link: 'https://wa.me/5585997313090?text=Hello!'
    },
    {
      label: 'linkedin',
      link: 'https://www.linkedin.com/in/victor-hugo-amorim-arruda/'
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
    wpp: <BsWhatsapp style={{ fontSize: '1em' }} />,
    linkedin: <BsLinkedin style={{ fontSize: '1em' }} />,
    github: <BsGithub style={{ fontSize: '1em' }} />,
    gitlab: <AiFillGitlab style={{ fontSize: '1em' }} />,
    codepen: <AiFillCodepenCircle style={{ fontSize: '1em' }} />,
    email: <HiOutlineMail style={{ fontSize: '1em' }} />,
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
    if (arrayMenu.length < 4 && pageScroll[0] === true) {
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
    const maxFrames = LogoAnimaAsci.logo.length - 1

    // chegou ao fim → pausa
    if (frame === maxFrames) {
      const timeout = setTimeout(() => {
        setFrame(0)
      }, 4000)

      return () => clearTimeout(timeout)
    }

    // animação normal
    const interval = setInterval(() => {
      setFrame(prev => prev + 1)
    }, 10)

    return () => clearInterval(interval)
  }, [frame])

  return (
    <div className="App flex flex-row">
      <header className="App-header">
      </header>
      <nav className="bg-gray-900 flex flex-col border-gray-200 fixed" style={{ width: 70, height: "100vh", paddingTop: 7, shadow: "2px 2px 3px black" }}>
        <img src={logobranca} className='mr-auto ml-auto' style={{ width: 15 }} />
        <span className='flex flex-wrap text-white gap-2 w-full pt-1 mt-3 mr-auto ml-auto' style={{ height: 70 }}>
          <button className={pageScroll[0] ? "flex flex-col justify-center items-center bg-gray-500 w-full pt-2 pb-2" : null + 'flex-col mr-auto ml-auto text-gray-300 w-full '} onClick={() => urlGoTo("inicio")}>
            <HiOutlineIdentification className={pageScroll[0] ? " text-gray-200 " : "azl-lev " + "mr-auto ml-auto shadow text-xl"} />
            Home
            {pageScroll[0] ? <img src={sign} className="absolute" style={{ right: "-7px", width: 7 }} /> : null}
          </button>
          <button className={pageScroll[1] ? "flex flex-col justify-center items-center bg-gray-500 w-full pt-2 pb-2" : null + 'flex-col mr-auto ml-auto text-gray-300 w-full '} onClick={() => urlGoTo("bio")}>
            <HiOutlineUserCircle className={pageScroll[1] ? " text-gray-200 " : "azl-lev " + "mr-auto ml-auto shadow text-xl"} />
            Bio
            {pageScroll[1] ? <img src={sign} className="absolute" style={{ right: "-7px", width: 7 }} /> : null}
          </button>
          <button className={pageScroll[2] ? "flex flex-col justify-center items-center r bg-gray-500 w-full pt-2 pb-2" : null + 'flex-col mr-auto ml-auto text-gray-300 w-full '} onClick={() => urlGoTo("carreira")}>
            <HiOutlineFastForward className={pageScroll[2] ? " text-gray-200 " : "azl-lev " + "mr-auto ml-auto shadow text-xl"} />
            Portfolio
            {pageScroll[2] ? <img src={sign} className="absolute" style={{ right: "-7px", width: 7 }} /> : null}
          </button>
        </span>
      </nav>
      <div className="Main w-full" style={{ width: 'calc( 100% - 70px)' , marginLeft: 70 }}>
        <Sessao>
          <div id="inicio" ref={myRef}>
              {pageScroll[0] && pageLoaded ?
                <div className="flex justify-center items-center align-center flex-wrap w-full mr-auto ml-auto pb-10 pt-10" style={{maxWidth: 700}}>
                  <div
                    className="md:w-2/5 w-full overflow-hidden"
                    style={{
                      whiteSpace: 'pre',
                      fontFamily: 'monospace',
                      color: 'rgb(142 142 142)',
                      fontSize: 12,
                      marginBottom: 10,
                      lineHeight: '13px',
                      letterSpacing: '2px',
                      height: 227.06
                    }}
                  >
                    {LogoAnimaAsci.logo[frame].join('\n')}
                  </div>
                  <span className='md:w-3/5 w-full  justify-center align-center flex-col pl-5' style={{borderLeft: "1px solid gray"}}>
                    <h1 id="header-1" className="mt-1 mb-1 bg-transparency-2 text-2xl azl" style={{fontSize: "2em"}}>
                      Hugo<b>Amorim</b>
                    </h1>
                    {/* <hr className='w-full aml-background mt-2 mb-2'/> */}
                    <span className='mt-1 mb-1'>
                      <p id="header-2" className="azl-lev text-rose-500" style={{fontSize: "1.7em"}}>
                        {'< '} FullStackDeveloper {' />'}
                      </p>
                    </span>
                    <span className='mb-1'>
                      <b id="header-2" className="vrd text-rose-500" style={{fontSize: "1.4em"}}>
                        NodeJS & Csharp
                      </b>
                    </span>
                    <span id="header-3" className='flex gap-2 mt-1 mb-1'>
                      <button className='btn px-3 py-1 text-base lrj lrj-borda' onClick={() => urlGoTo('bio')}>
                        Bio
                      </button>
                      <button className='btn px-3 py-1 text-base lrj lrj-borda' onClick={() => urlGoTo('timeline')}>
                        TimeLine
                      </button>
                      <button className='btn px-3 py-1 text-base lrj lrj-borda' onClick={() => urlGoTo('portfolio')}>
                        Portfolio
                      </button>
                    </span>
                    <p id="header-4" className="flex gap-2 mt-2 white text-md" style={{ fontSize: '2rem' }}>
                      <a className={"flex p-2 text-xl vrl"}>
                        <BsWhatsapp style={{ fontSize: '1em' }} />
                      </a>
                      <a className={"flex p-2 text-xl vrl"}>
                        <BsLinkedin style={{ fontSize: '1em' }} />
                      </a>
                      <a className={"flex p-2 text-xl vrl"}>
                        <HiOutlineMail style={{ fontSize: '1em' }} />
                      </a>
                    </p>
                  </span>
                </div>
                : null
              }
          </div>
        </Sessao>
        <Sessao>
          <div id="bio" className="flex w-full relative items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6 overflow-hidden" style={{maxWidth: 1300 , marginLeft: 'auto', marginRight: 'auto'}} ref={myRef1}>
          <div className="flex flex-row text-left top-2 text-center pl-6 mb-4" style={{ zIndex: 10 , maxWidth: 80 }}>
            <span className="w-full mt-4 flex justify-center align-center text-white vrl" style={{fontSize: 35 , marginTop: 23}}>
              <HiOutlineUserCircle />
            </span>
            <span className="w-full mt-4 flex justify-center align-center text-white vrl" style={{fontSize: 35}}>
              BIO
            </span>
          </div>
            <div className="flex flex-wrap w-full" style={{ zIndex: 10 }}>
              {/* <div className="md:w-1/4 md:pr-5 w-full">
                <img className='flex w-full border-2 border-white avatar' src={huguim} />
              </div> */}
              <div className="w-full white text-left pt-5 pb-6">
                <div className='flex'>
                  <h1 className="text-3xl mb-1 mt-4 text-white tracking-widest azl-lev">FullStack Developer</h1>
                </div>
                <div>
                  <p className='flex flex-row flex-wrap gap-3'>
                    <img className='border-2 border-white avatar mt-7' style={{maxWidth: 230}} src={huguim} />
                    <span className="text-base text-gray-300 pt-1 text-justify" style={{textIndent: 12}}>
                      I have been working as a software developer since <b>2019</b>, with solid experience in developing, maintaining, and modernizing <b>full-stack applications</b>, including both greenfield projects and legacy systems. I am involved throughout the entire software development lifecycle, from requirements analysis and system architecture to <b>implementation, testing, deployment, and maintenance</b>.
                    </span>
                    <span className="text-base w-full text-gray-300 pt-1 text-justify" style={{textIndent: 12}}>
                      My technical background is centered on <b>backend development</b>, with strong expertise in <b>RESTful API</b> design, authentication and authorization, third-party integrations, and <b>relational database modeling</b> and optimization. I also develop responsive, <b>component-based frontend applications</b> and create custom plugins and <b>extensions for CMS platforms</b>, always following best practices for maintainability, security, and performance.
                    </span>
                    <span className="text-base w-full text-gray-300 pt-1 text-justify" style={{textIndent: 12}}>
                      My primary focus is on <b>Node.js</b> and <b>C#</b>, using frameworks such as <b>Express</b>, <b>AdonisJS</b>, and <b>.NET</b>, along with <b>React on the frontend</b>. I apply principles like <b>SOLID</b>, <b>Clean Architecture</b>, and <b>layered architectures</b> to build scalable, robust, and maintainable software solutions aligned with business needs.
                    </span>
                  </p>
                  <br />
                </div>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xl text-white w-full lrj'>HARD <b>SKILLS</b></label>
                    <hr className="w-full border-gray-500" />
                    <div className='flex flex-row gap-4 mb-2'>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BiLogoJavascript className='text-white text-md mt-1 mr-1' /> JavaScript
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BiLogoTypescript className='text-white text-md mt-1 mr-1' /> TypeScript
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <FaNodeJs className='text-white text-md mt-1 mr-1' /> NodeJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <SiCsharp className='text-white text-md mt-1 mr-1' /> Csharp
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BsWordpress className='text-white text-md mt-1 mr-1' /> WordPress
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xl text-white w-full lrj'>SOFT <b>SKILLS</b></label>
                    <hr className="w-full border-gray-500" />
                    <div className='flex flex-row gap-4 mb-2'>
                      <span className='flex flex-row text-base text-white vrd'>
                        <FaCloudUploadAlt className='text-white text-md mt-1 mr-1' /> DevOps
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <SiDocker  className='text-white text-md mt-1 mr-1' /> Docker
                      </span>
                    </div>
                  </div>
                </div>
                <label className='flex text-xl text-white w-full lrj mt-4'>FRAME<b>WORKS</b></label>
                <div className='flex flex-wrap gap-4'>
                  <div className='flex flex-col gap-2'>
                    <label className='azl-lev w-full uppercase text-base'>
                      BACK <b>END</b>
                    </label>
                    <hr className="w-full border-gray-500" />
                    <div className='flex flex-row gap-3 mb-1'>
                      <span className='flex flex-row text-base text-white vrd'>
                        <SiExpress className='text-white text-xl mt-1 mr-1' /> ExpressJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <SiNestjs className='text-white text-xl mt-1 mr-1' /> NestJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <SiAdonisjs className='text-white text-xl mt-1 mr-1' /> AdonisJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <SiDotnet className='text-white text-xl mt-1 mr-1' /> .NET 
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='azl-lev w-full text-base uppercase'>
                      FRONT<b>END</b>
                    </label>
                    <hr className="w-full border-gray-500" />
                    <div className='flex flex-row gap-3 mb-1'>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BiLogoReact className='text-white text-xl mt-1 mr-1' /> ReactJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <TbBrandNextjs className='text-white text-xl mt-1 mr-1' /> NextJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BiLogoTailwindCss className='text-white text-xl mt-1 mr-1' /> Tailwind
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BiLogoVuejs className='text-white text-xl mt-1 mr-1' /> VueJS
                      </span>
                      <span className='flex flex-row text-base text-white vrd'>
                        <BiLogoAngular className='text-white text-xl mt-1 mr-1' /> AngularJS
                      </span>
                    </div>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <label className='azl-lev w-full uppercase text-base'>
                      VERSIONING
                    </label>
                    <hr className="w-full border-gray-500" />
                    <div className='flex flex-row gap-3'>
                      <span className='flex flex-row text-base text-white vrd'>
                        <FaGitSquare className='text-white text-xl mt-1 mr-1' /> GitFlow
                      </span>
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
