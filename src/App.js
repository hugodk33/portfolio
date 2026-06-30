import React, { useState, useEffect, useRef } from 'react';

import LogoAnimaAsci from './LOGO-ASCI/logoasci.json'
import './App.css';
import { Sessao } from './components/Section'
import { BsWhatsapp, BsLinkedin, BsGithub, BsWordpress, BsFiletypeCss, BsFiletypeHtml } from 'react-icons/bs'
import { BiLogoJavascript, BiLogoTypescript, BiLogoGithub, BiLogoReact, BiLogoAngular, BiLogoVuejs, BiLogoPhp, BiLogoTailwindCss, BiLogoBootstrap, BiLogoGitlab } from 'react-icons/bi'
import { FaGitSquare, FaCloudUploadAlt } from 'react-icons/fa'
import { AiFillGitlab, AiFillCodepenCircle } from 'react-icons/ai'
import { HiOutlineMail, HiOutlineUserCircle, HiOutlineIdentification, HiOutlineFastForward } from 'react-icons/hi'
import { SiCsharp, SiExpress, SiDotnet, SiNestjs, SiAdonisjs, SiMysql, SiAmazonaws, SiJquery, SiDocker } from 'react-icons/si'
import { FaNodeJs } from 'react-icons/fa'
import { TbBrandNextjs, TbWorldWww } from 'react-icons/tb'
import { GoAlert } from "react-icons/go";
import { RiToolsLine } from "react-icons/ri";

import career from './career.json'
import careerEn from './career-en.json'
import translations from './i18n/translations'
import knight from './assets/knight.png'
import huguim from './img/eu.png'
import logobranca from './assets/logo/logo-branca-01.svg'
import curriculo from './assets/curriculo-victor-hugo.pdf'

function App() {

  const [frame, setFrame] = useState(0)
  const [language, setLanguage] = useState('en')
  const [timeLine, setTimeLine] = useState(careerEn)
  const [actualTime, setActualTime] = useState(0)
  const [actualService, setActualService] = useState(0)

  const t = (key) => key.split('.').reduce((obj, k) => obj?.[k], translations[language]) || key

  const [pageScroll, setPageScroll] = useState([true, false, false, false]);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [arrayMenu, setArrayMenu] = useState([]);
  const [arrayMenu2, setArrayMenu2] = useState([]);

  const myRef = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  const checkPosition = () => {
    const sections = [
      { el: myRef.current, idx: 0 },
      { el: myRef1.current, idx: 1 },
      { el: myRef2.current, idx: 2 },
      { el: myRef3.current, idx: 3 }
    ];

    let minDist = Infinity;
    let activeIdx = -1;

    sections.forEach(({ el, idx }) => {
      if (el) {
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top);
        if (dist < minDist) {
          minDist = dist;
          activeIdx = idx;
        }
      }
    });

    if (activeIdx >= 0) {
      const newScroll = [false, false, false, false];
      newScroll[activeIdx] = true;
      setPageScroll(newScroll);
    }

    if (activeIdx === 1) {
      setArrayMenu([]);
      setArrayMenu2([]);
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
      <nav className="flex flex-col border-gray-200 fixed" style={{ width: 70, height: "100vh", paddingTop: 7, shadow: "2px 2px 3px black" , backgroundColor: "#141414" }}>
        <img src={logobranca} className='mr-auto ml-auto' style={{ width: 15 }} />
        <span className='flex flex-col text-white gap-1 w-full pt-1 mt-3 mr-auto ml-auto'>
          <button className={pageScroll[0] ? "flex flex-col justify-center items-center bg-[#c6462b] w-full pt-2 pb-2" : null + 'flex-col mr-auto ml-auto text-gray-300 w-full '} onClick={() => urlGoTo("inicio")}>
            <HiOutlineIdentification className={pageScroll[0] ? " text-gray-200 " : "azl-lev " + "mr-auto ml-auto shadow text-xl"} />
            {t('nav.home')}
            {pageScroll[0] ? <span className="absolute" style={{ right: "-7px", width: 7, color: '#c6462b' }}><svg viewBox="0 0 12.8 27.9" className="w-full h-auto"><path fill="currentColor" d="M0.2,0.8l11.2,11.7c1,1,0.9,2.7-0.1,3.6L0.1,26.9L0.2,0.8z"/></svg></span> : null}
          </button>
          <button className={pageScroll[1] ? "flex flex-col justify-center items-center bg-[#c6462b] w-full pt-2 pb-2" : null + 'flex-col mr-auto ml-auto text-gray-300 w-full '} onClick={() => urlGoTo("bio")}>
            <HiOutlineUserCircle className={pageScroll[1] ? " text-gray-200 " : "azl-lev " + "mr-auto ml-auto shadow text-xl"} />
            {t('nav.bio')}
            {pageScroll[1] ? <span className="absolute" style={{ right: "-7px", width: 7, color: '#c6462b' }}><svg viewBox="0 0 12.8 27.9" className="w-full h-auto"><path fill="currentColor" d="M0.2,0.8l11.2,11.7c1,1,0.9,2.7-0.1,3.6L0.1,26.9L0.2,0.8z"/></svg></span> : null}
          </button>
          <button className={pageScroll[2] ? "flex flex-col justify-center items-center r bg-[#c6462b] w-full pt-2 pb-2" : null + 'flex-col mr-auto ml-auto text-gray-300 w-full '} onClick={() => urlGoTo("carreira")}>
            <HiOutlineFastForward className={pageScroll[2] ? " text-gray-200 " : "azl-lev " + "mr-auto ml-auto shadow text-xl"} />
            {t('nav.timeline')}
            {pageScroll[2] ? <span className="absolute" style={{ right: "-7px", width: 7, color: '#c6462b' }}><svg viewBox="0 0 12.8 27.9" className="w-full h-auto"><path fill="currentColor" d="M0.2,0.8l11.2,11.7c1,1,0.9,2.7-0.1,3.6L0.1,26.9L0.2,0.8z"/></svg></span> : null}
          </button>
        </span>
        <div className="flex flex-row flex-wrap justify-center gap-1 w-full mt-auto mb-3 px-1">
          <button className={"flex-1 flex items-center justify-center gap-1 py-1.5 rounded text-xs font-semibold transition-all duration-200 " + (language === 'en' ? 'bg-blue-600 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-600')} onClick={() => { setLanguage('en'); setTimeLine(careerEn); setActualTime(0); setActualService(0); }}>
            <svg viewBox="0 0 640 480" className="w-4 h-3 shrink-0"><rect width="640" height="480" fill="#fff"/><rect width="640" height="53.3" fill="#b22234" y="0"/><rect width="640" height="53.3" fill="#fff" y="106.6"/><rect width="640" height="53.3" fill="#b22234" y="213.3"/><rect width="640" height="53.3" fill="#fff" y="319.9"/><rect width="304" height="200" fill="#3c3b6e"/></svg>
            EN
          </button>
          <button className={"flex-1 flex items-center justify-center gap-1 py-1.5 rounded text-xs font-semibold transition-all duration-200 " + (language === 'pt' ? 'bg-blue-600 text-white shadow' : 'bg-gray-700 text-gray-400 hover:bg-gray-600')} onClick={() => { setLanguage('pt'); setTimeLine(career); setActualTime(0); setActualService(0); }}>
            <svg viewBox="0 0 640 480" className="w-4 h-3 shrink-0"><rect width="640" height="480" fill="#009739"/><polygon points="320,60 580,240 320,420 60,240" fill="#FEDD00"/><circle cx="320" cy="240" r="100" fill="#002776"/></svg>
            PT
          </button>
        </div>
      </nav>
      <div className="Main w-full" style={{ width: 'calc( 100% - 70px)', marginLeft: 70 }}>
        <Sessao>
          <div id="inicio" ref={myRef}>
            {pageScroll[0] && pageLoaded ?
              <div className="flex justify-center items-center align-center flex-wrap w-full mr-auto ml-auto pb-10 pt-10" style={{ maxWidth: 700 }}>
                <div
                  className="md:w-2/5 w-full overflow-hidden text-center mb-4"
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
                <span className='md:w-3/5 w-full justify-center align-center flex-col mt-4 pl-5' style={{ borderLeft: "1px solid #2c2c2c" }}>
                  <h1 id="header-1" className="mt-1 mb-1 bg-transparency-2 text-2xl vrl" style={{ fontSize: "2em" }}>
                    Hugo<b> Amorim</b>
                  </h1>
                  {/* <hr className='w-full aml-background mt-2 mb-2'/> */}
                  <span className='mt-1 mb-1'>
                    <p id="header-2" className="azl-lev" style={{ fontSize: "1.7em" }}>
                      {t('hero.fullstack')}
                    </p>
                  </span>
                  <span className='mb-1'>
                    <b id="header-2" className="vrd" style={{ fontSize: "1.4em" }}>
                      {t('hero.nodeCsharp')}
                    </b>
                  </span>
                  <span id="header-3" className='flex gap-2 mt-1 mb-1'>
                    <button className='btn px-3 py-1 text-base lrj lrj-borda' onClick={() => urlGoTo('bio')}>
                      {t('hero.bio')}
                    </button>
                    <button className='btn px-3 py-1 text-base lrj lrj-borda' onClick={() => urlGoTo('timeline')}>
                      {t('hero.timeline')}
                    </button>
                    <button className='btn px-3 py-1 text-base lrj lrj-borda' onClick={() => urlGoTo('portfolio')}>
                      {t('hero.portfolio')}
                    </button>
                  </span>
                  {/* <div id="header-4" className="flex gap-2 mt-2 white text-md" style={{ fontSize: '2rem' }}>
                    <a className={"flex p-2 text-xl vrl"}>
                      <BsWhatsapp style={{ fontSize: '1em' }} />
                    </a>
                    <a className={"flex p-2 text-xl vrl"}>
                      <BsLinkedin style={{ fontSize: '1em' }} />
                    </a>
                    <a className={"flex p-2 text-xl vrl"}>
                      <HiOutlineMail style={{ fontSize: '1em' }} />
                    </a>
                  </div> */}
                </span>
              </div>
              : null
            }
          </div>
        </Sessao>
        <div className="w-full bg-gradient-to-r from-slate-900 to-slate-800 flex flex-col">
          <div style={{ maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto' }} ref={myRef1}>
            <div className="flex flex-row justify-left text-left top-2 mb-4 w-full md:pr-6 md:pl-6" style={{ maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto' }} ref={myRef1}>
              <span className="mt-4 flex justify-center align-center vrl" style={{ fontSize: 35, marginTop: 23 }}>
                <HiOutlineUserCircle />
              </span>
              <span className="mt-4 flex justify-center align-center text-gray-400" style={{ fontSize: 35 }}>
                {t('bio.title')}
              </span>
            </div>
            <div id="bio" className="flex w-full relative items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6 overflow-hidden" style={{ maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="flex flex-wrap w-full" style={{ zIndex: 10 }}>
                {/* <div className="md:w-1/4 md:pr-5 w-full">
                  <img className='flex w-full border-2 border-white avatar' src={huguim} />
                </div> */}
                <div className="w-full flex flex-wrap white text-left pt-5 pb-6 px-2">
                  <div className='flex flex-wrap w-full'>
                    <div className='flex flex-wrap flex-row w-full'>
                      <span className='pr-3 pb-3'>
                        {/* style={{ aspectRatio: '1 / 1', maxWidth: 230 , maxHeight: 255 }} */}
                        <img className=' avatar w-full mb-2 border-2 border-white' style={{ maxHeight: 230, maxWidth: 230 }} src={huguim} />
                      </span>
                      <span className=' flex items-center' >
                        <span>
                          <h1 className="text-3xl mb-1 text-white tracking-widest vrd">Hugo<b> Amorim</b></h1>
                          <h2 className="text-2xl mb-1 mt-1 text-white tracking-widest azl-lev">Full<b>Stack</b> DEV</h2>
                          <span id="header-4" className="flex gap-1 mt-2 white text-md mb-4" style={{ fontSize: '2rem' }}>
                            <a className={"flex border-1 rounded-full p-2 vrl-borda text-xl vrl"}>
                              <BsWhatsapp style={{ fontSize: '1em' }} />
                            </a>
                            <a className={"flex border-1 rounded-full p-2 vrl-borda text-xl vrl"}>
                              <BsLinkedin style={{ fontSize: '1em' }} />
                            </a>
                            <a className={"flex border-1 rounded-full vrl-borda p-2 text-xl vrl"}>
                              <HiOutlineMail style={{ fontSize: '1em' }} />
                            </a>
                          </span>
                        </span>
                      </span>
                    </div>
                    <>
                      <div className='flex flex-wrap gap-4'>
                        <div className='flex flex-wrap flex-col gap-1'>
                          <label className='text-base text-white w-full lrj'>HARD <b>SKILLS</b></label>
                          <hr className="w-full border-gray-500" />
                          <div className='flex flex-wrap flex-row gap-2 mb-2'>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <BiLogoJavascript className='text-white text-md mt-1 mr-1' /> JavaScript
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <BiLogoTypescript className='text-white text-md mt-1 mr-1' /> TypeScript
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <FaNodeJs className='text-white text-md mt-1 mr-1' /> NodeJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <SiCsharp className='text-white text-md mt-1 mr-1' /> Csharp
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-wrap flex-col gap-1'>
                          <label className='text-base text-white w-full lrj'>SOFT <b>SKILLS</b></label>
                          <hr className="w-full border-gray-500" />
                          <div className='flex flex-wrap flex-row gap-4 mb-2'>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <FaCloudUploadAlt className='text-white text-md mt-1 mr-1' /> DevOps
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <SiDocker className='text-white text-md mt-1 mr-1' /> Docker
                            </span>
                          </div>
                        </div>
                      </div>
                      <label className='flex text-base text-white w-full lrj mt-1'>FRAME<b>WORKS</b></label>
                      <div className='flex flex-wrap flex-wrap gap-4'>
                        <div className='flex flex-wrap flex-col gap-1'>
                          <label className='azl-lev w-full uppercase text-base'>BACK <b>END</b></label>
                          <hr className="w-full border-gray-500" />
                          <div className='flex flex-row flex-wrap gap-3 mb-1'>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <SiExpress className='text-white text-xl mt-1 mr-1' /> ExpressJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <SiNestjs className='text-white text-xl mt-1 mr-1' /> NestJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <SiAdonisjs className='text-white text-xl mt-1 mr-1' /> AdonisJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <SiDotnet className='text-white text-xl mt-1 mr-1' /> .NET
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col flex-wrap gap-1'>
                          <label className='azl-lev w-full text-base uppercase'>FRONT<b> END</b></label>
                          <hr className="w-full border-gray-500" />
                          <div className='flex flex-row flex-wrap gap-3 mb-1'>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <BiLogoReact className='text-white text-xl mt-1 mr-1' /> ReactJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <TbBrandNextjs className='text-white text-xl mt-1 mr-1' /> NextJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <BiLogoTailwindCss className='text-white text-xl mt-1 mr-1' /> Tailwind
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <BiLogoVuejs className='text-white text-xl mt-1 mr-1' /> VueJS
                            </span>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <BiLogoAngular className='text-white text-xl mt-1 mr-1' /> AngularJS
                            </span>
                          </div>
                        </div>
                        <div className='flex flex-col gap-1'>
                          <label className='azl-lev w-full uppercase text-base'>VERSIONING</label>
                          <hr className="w-full border-gray-500" />
                          <div className='flex flex-row gap-3'>
                            <span className='flex flex-row text-xl text-white vrd'>
                              <FaGitSquare className='text-white text-xl mt-1 mr-1' /> GitFlow
                            </span>
                          </div>
                        </div>
                      </div>
                    </>
                    <br />
                  </div>
                  <div className='flex flex-wrap w-full'>
                    <hr className='w-full border-gray-500 mt-4 mb-4 pr-3 pl-3' />
                    <p className='flex flex-row flex-wrap gap-3'>
                      <span className="text-base text-gray-300 pt-1 text-justify" style={{ textIndent: 12 }}>
                        I have been working as a software developer since <b>2019</b>, with solid experience in developing, maintaining, and modernizing <b>full-stack applications</b>, including both greenfield projects and legacy systems. I am involved throughout the entire software development lifecycle, from requirements analysis and system architecture to <b>implementation, testing, deployment, and maintenance</b>.
                      </span>
                      <span className="text-base w-full text-gray-300 pt-1 text-justify" style={{ textIndent: 12 }}>
                        My technical background is centered on <b>backend development</b>, with strong expertise in <b>RESTful API</b> design, authentication and authorization, third-party integrations, and <b>relational database modeling</b> and optimization. I also develop responsive, <b>component-based frontend applications</b> and create custom plugins and <b>extensions for CMS platforms</b>, always following best practices for maintainability, security, and performance.
                      </span>
                      <span className="text-base w-full text-gray-300 pt-1 text-justify" style={{ textIndent: 12 }}>
                        My primary focus is on <b>Node.js</b> and <b>C#</b>, using frameworks such as <b>Express</b>, <b>AdonisJS</b>, and <b>.NET</b>, along with <b>React on the frontend</b>. I apply principles like <b>SOLID</b>, <b>Clean Architecture</b>, and <b>layered architectures</b> to build scalable, robust, and maintainable software solutions aligned with business needs.
                      </span>
                    </p>
                    <hr className='w-full border-gray-500 mt-4 mb-4 pr-3 pl-3' />
                    <br />
                  </div>
                  {/* <div className='flex flex-wrap gap-4'>
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
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Sessao>
          <div id="carreira" className="flex relative items-center flex-col mr-auto ml-auto md:pr-6 md:pl-6 pt-4 overflow-hidden" ref={myRef2}>
            <div className="flex flex-row justify-left text-left top-2 mb-4 w-full md:pr-6 md:pl-6" style={{ maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto' }}>
              <span className="mt-4 flex justify-center align-center vrl" style={{ fontSize: 35, marginTop: 23 }}>
                <HiOutlineFastForward />
              </span>
              <span className="mt-4 flex justify-center align-center text-gray-400" style={{ fontSize: 35 }}>
                {t('carreira.title')}
              </span>
            </div>

            <div className="w-full" style={{ maxWidth: 1300, marginLeft: 'auto', marginRight: 'auto' }}>
              <div className="flex flex-col items-center mb-6">
                <ol id="steppter" className="flex items-center w-full" style={{ maxWidth: 400 }}>
                  {
                    timeLine.carrer.map((a, b) => {
                      switch (b) {
                        case 0:
                        case 1:
                          return (
                            <React.Fragment key={b}>
                              <li className="flex w-full items-center" onClick={() => changeTimeLine(b)}>
                                <span className={"flex items-center justify-center w-10 h-10 rounded-full shrink-0 cursor-pointer transition-all duration-300 hover:scale-110" + (b < actualTime ? ' bg-emerald-500 shadow-lg shadow-emerald-500/30 text-center' : b === actualTime ? ' bg-gradient-to-b from-blue-500 to-indigo-600 border-blue-300 border-2 shadow-lg shadow-blue-500/30 text-center' : ' bg-gray-700 hover:bg-gray-600 ')}>
                                  <span className={"font-bold text-xs" + (b < actualTime ? ' text-white ' : b === actualTime ? ' text-white' : ' text-gray-400 ')}>{a.year}</span>
                                </span>
                              </li>
                              <hr className={'w-full border' + (b < actualTime ? ' border-emerald-500/60 ' : b === actualTime ? ' border-blue-400/60' : ' border-gray-700 ')} />
                            </React.Fragment>
                          );
                        default:
                          return (
                            <React.Fragment key={b}>
                              <li className="flex w-full items-center" onClick={() => setActualTime(b)}>
                                <span className={"flex items-center justify-center w-10 h-10 rounded-full shrink-0 cursor-pointer transition-all duration-300 hover:scale-110" + (b < actualTime ? ' bg-emerald-500 shadow-lg shadow-emerald-500/30 ' : b === actualTime ? ' bg-gradient-to-b from-blue-500 to-indigo-600 border-blue-300 border-2 shadow-lg shadow-blue-500/30 ' : ' bg-gray-700 hover:bg-gray-600 ')}>
                                  <span className={"font-bold text-xs" + (b < actualTime ? ' text-white ' : b === actualTime ? ' text-white' : ' text-gray-400 ')}>{a.year}</span>
                                </span>
                              </li>
                            </React.Fragment>
                          );
                      }
                    })
                  }
                </ol>
              </div>

              <div className='flex w-full mb-4 gap-2 justify-center'>
                {
                  timeLine.carrer[actualTime].services.map((a, b) => {
                    return (
                      <button key={'timeline-' + b} className={"w-8 h-8 text-sm font-semibold rounded-full transition-all duration-200" + (b === actualService ? ' bg-blue-500 text-white shadow-md shadow-blue-500/40' : ' bg-gray-700 text-gray-400 border border-gray-600 hover:bg-gray-600')} onClick={() => setActualService(b)}>{b + 1}</button>
                    )
                  })
                }
              </div>

              <div className="bg-gray-800/40 rounded-xl p-5 md:p-7 border border-gray-700/50" style={{ maxWidth: 750, marginLeft: 'auto', marginRight: 'auto' }}>
                <p className="text-xl text-white mb-1 tracking-widest font-semibold">{timeLine.carrer[actualTime].services[actualService].title}</p>
                <p className="text-md mb-2 text-amber-300 font-semibold">{timeLine.carrer[actualTime].services[actualService].service}</p>
                <hr className='w-full my-3 border-blue-400/40' />
                <p className="flex text-sm text-white flex-wrap font-medium text-cyan-400 gap-1">
                  {generateTechOutput(timeLine.carrer[actualTime].services[actualService].techs)}
                </p>
                {
                  timeLine.carrer[actualTime].services[actualService].challenge ?
                    <>
                      <label className='text-blue-400 mt-3 uppercase tracking-wider' style={{ fontSize: 9 }}>{t('carreira.challenge')}</label>
                      <div className="flex items-start bg-blue-500/10 border border-blue-400/20 text-blue-200 px-3 py-2 mt-1 mb-3 rounded-lg" style={{ fontSize: 11 }} role="alert">
                        <GoAlert className='text-blue-400 text-lg mr-2 mt-0.5 shrink-0' />
                        <p>{timeLine.carrer[actualTime].services[actualService].challenge}</p>
                      </div>
                    </>
                    : null
                }
                <label className='text-blue-400 mt-1 uppercase tracking-wider' style={{ fontSize: 9 }}>{t('carreira.description')}</label>
                <div className="text-gray-300 mt-1">{transformarQuebraDeLinhaEmParagrafo(timeLine.carrer[actualTime].services[actualService].description)}</div>
                {
                  timeLine.carrer[actualTime].services[actualService].link ?
                    <a
                      href={timeLine.carrer[actualTime].services[actualService].link}
                      target="_blank" rel="noopener noreferrer"
                      className='inline-flex flex-row items-center bg-blue-600 hover:bg-blue-500 text-white py-2 mt-3 px-5 rounded-full transition-colors duration-200'
                    >
                      <TbWorldWww className='mr-2 text-xl' />
                      {t('carreira.verSite')}
                    </a>
                    : null
                }
              </div>
            </div>
          </div>
        </Sessao>
        <Sessao>
          <div id="portfolio" className="flex relative justify-center items-center flex-col mr-auto ml-auto overflow-hidden" ref={myRef3}>
            <div className="flex w-full absolute top-2 text-center" style={{ width: 600 }}>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <h1 className="w-full mt-4 flex justify-center white text-2xl text-white">
                {t('portfolio.title')}
              </h1>
              <div className='h-1 w-full flex bg-white mt-9' style={{ height: 2 }} />
              <div />
            </div>
            <div className="flex flex-col gap-3 mr-auto ml-auto w-full mt-4 white text-xl text-center justify-center items-center text-white p-5" style={{ border: "3px dotted gray" }}>
              <RiToolsLine className='text-3xl' />
              <h1>{t('portfolio.maintenance').split(' ')[0]} <br />{t('portfolio.maintenance').split(' ').slice(1).join(' ')}</h1>
            </div>
          </div>
        </Sessao>
      </div>
    </div>
  );
}

export default App;
