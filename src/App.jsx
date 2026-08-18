import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaJava,
  FaLinkedin,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSwift,
} from 'react-icons/fa';
import {
  FiArrowUpRight,
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiBriefcase,
  FiCode,
  FiCpu,
  FiDisc,
  FiDownload,
  FiExternalLink,
  FiFlag,
  FiGrid,
  FiHeadphones,
  FiHome,
  FiLayers,
  FiMail,
  FiMusic,
  FiPauseCircle,
  FiPlay,
  FiRadio,
  FiRepeat,
  FiShuffle,
  FiSkipBack,
  FiSkipForward,
  FiTarget,
  FiTerminal,
  FiUser,
  FiUsers,
  FiZap,
  FiList,
  FiMaximize2,
  FiMonitor,
  FiVolume2,
} from 'react-icons/fi';
import {
  SiCplusplus,
  SiMysql,
  SiOracle,
  SiR,
  SiSupabase,
} from 'react-icons/si';
import { projectFilters, projects } from './data/projects';

const links = {
  github: 'https://github.com/diegogarciagzz',
  linkedin: 'https://www.linkedin.com/in/diego-garcia-gzz/',
  resume: '/CV_Diego_Garcia_Gonzalez.pdf',
  email: 'mailto:Diego.Garcia.Gzz@outlook.com',
};

const navItems = [
  ['Home', '#top', <FiHome />],
  ['Education', '#education', <FiBookOpen />],
  ['Experience', '#experience', <FiBriefcase />],
  ['Projects', '#projects', <FiGrid />],
  ['Leadership', '#leadership', <FiUsers />],
  ['Volunteering', '#volunteering', <FiFlag />],
  ['Genres', '#genres', <FiDisc />],
  ['About', '#about', <FiUser />],
  ['Contact', '#contact', <FiMail />],
];

const experience = [
  {
    id: 'junior-developer',
    period: 'Aug 2025 - Aug 2026',
    title: 'Junior Developer',
    org: 'Digital Transformation, Tecnologico de Monterrey',
    body:
      'Contributed to internal digital solutions that streamlined workflows, improved institutional services, and supported data-driven decision-making across campus operations.',
    link: links.linkedin,
    icon: <FiBriefcase />,
    accent: 'blue',
    moves: [
      'Python automations for administrative workflows',
      'HTML, CSS, and JavaScript interfaces for vendor-service tracking',
      'Sentiment analysis dashboard for institutional survey feedback',
      'Workflow optimization through stakeholder collaboration',
    ],
    details: [
      'Built internal web interfaces to support registration, management, and tracking of services provided by institutional vendors.',
      'Developed Python-based automations that reduced repetitive manual work in administrative processes.',
      'Transformed student survey comments into actionable insights and visualizations for institutional decision-making.',
      'Collaborated with multidisciplinary teams to translate operational needs into practical software solutions.',
      'Worked in a hybrid internship context based in Monterrey, Nuevo Leon, Mexico.',
    ],
    noMedia: true,
  },
];

const education = [
  {
    id: 'tec-cs',
    period: '2023 - 2027',
    title: 'B.S. Computer Science and Technology',
    org: 'Tecnologico de Monterrey, Campus Monterrey',
    body:
      'Academic Excellence Scholarship, 97.6/100 GPA, Top 1% Engineering and Sciences recognition, EIC Leadership Track, and Tec representative chess team.',
    link: links.resume,
    icon: <FiBookOpen />,
    accent: 'sky',
    moves: ['Academic excellence scholarship', '97.6/100 GPA', 'Top 1% Engineering and Sciences', 'EIC Leadership Track'],
    mediaSlot: 'Add later: Tec recognition photo, scholarship proof, or academic award screenshot.',
    media: [
      {
        title: 'Academic recognition',
        src: '/images/extras/ReconocimientoEducacion.jpeg',
        alt: 'Academic recognition proof',
        description: 'Academic recognition evidence.',
      },
      {
        title: 'Education profile',
        src: '/images/extras/EDUCACIONN.jpeg',
        alt: 'Education related profile image',
        description: 'Education section proof and context.',
      },
      {
        title: 'Leadership track',
        src: '/images/extras/educacionleader.jpeg',
        alt: 'Leadership track education proof',
        description: 'Leadership development proof.',
      },
      {
        title: 'Education diploma',
        src: '/images/extras/educaciondiploma.jpeg',
        alt: 'Education diploma proof',
        description: 'Diploma or academic achievement proof.',
      },
      {
        title: 'Formal academic photo',
        src: '/images/extras/FOTOFORMALEDUCACION.jpeg',
        alt: 'Formal academic photo',
        description: 'Formal photo for the education record.',
      },
    ],
  },
];

const leadership = [
  {
    id: 'seitc-president',
    title: 'SEITC President',
    date: 'Jun 2025 - Jul 2026',
    period: 'Jun 2025 - Jul 2026',
    org: 'Computer Science Student Society',
    body:
      'Led the Computer Science Student Society, coordinating technical talks, programming activities, company visits, networking, and student representation.',
    link: links.linkedin,
    icon: <FiRadio />,
    accent: 'green',
    coverImage: '/images/extras/LOGOSEITC.png',
    moves: ['Executive board leadership', 'Technical talks', 'Company visits', 'Student-faculty liaison'],
    details: [
      'Led SEITC as president, representing the Computer Science and Technology student community at Tecnologico de Monterrey.',
      'Coordinated the student executive board across academic, technical, networking, and community-building initiatives.',
      'Organized technical talks, programming activities, company visits, networking opportunities, and student integration events.',
      'Served as a liaison between students, faculty, and academic leadership, communicating student needs and supporting new initiatives.',
      'Closed the management year with SEITC recognized as Sociedad Sobresaliente at Orgullo CSE, the highest award granted to a student society.',
      'Promoted connections between students, industry professionals, faculty, and organizations to create opportunities beyond the classroom.',
    ],
    mediaSlot: 'Add later: SEITC event photo, speaker poster, company visit image, or student society proof.',
    media: [
      {
        title: 'Orgullo CSE award',
        src: '/images/extras/seitc-orgullo-cse.png',
        alt: 'SEITC Orgullo CSE Sociedad Sobresaliente award proof',
        description: 'Recognition for outstanding student society work.',
      },
      {
        title: 'SEITC event',
        src: '/images/extras/SEITCCC.jpeg',
        alt: 'SEITC event photo',
        description: 'Event proof from student society work.',
      },
      {
        title: 'Bloomberg visit',
        src: '/images/extras/SEITCBLOOMB.jpeg',
        alt: 'SEITC Bloomberg visit photo',
        description: 'Company visit and networking activity.',
      },
      {
        title: 'SEITC programming table',
        src: '/images/extras/mesaseitc.jpeg',
        alt: 'SEITC table activity',
        description: 'Programming activity and student engagement.',
      },
      {
        title: 'SEITC president proof',
        src: '/images/extras/SEITCCP.jpeg',
        alt: 'SEITC leadership proof',
        description: 'Leadership proof from SEITC activity.',
      },
    ],
  },
  {
    id: 'ajetec-chess-president',
    title: 'AJETEC Chess President',
    date: 'Aug 2024 - Feb 2025',
    period: 'Aug 2024 - Feb 2025',
    org: 'University chess group',
    body:
      'Led the university chess group through tournaments, workshops, training activities, and inter-university participation.',
    link: links.linkedin,
    icon: <FiTarget />,
    accent: 'gold',
    coverImage: '/images/extras/LOGOAJETEC.png',
    moves: ['Tournaments', 'Workshops', 'Training activities', 'Inter-university participation'],
    details: [
      'Led AJETEC, the university chess student group, promoting chess as a space for competition, learning, and community building.',
      'Organized chess tournaments, workshops, training sessions, and student events for players across different skill levels.',
      'Coordinated participation in inter-university events and collaborated with other student organizations on joint initiatives.',
      'Managed event planning, logistics, and community engagement while helping expand chess-related participation on campus.',
      'Used chess as a way to foster strategic thinking, collaboration, and stronger connections among students.',
    ],
    mediaSlot: 'Add later: tournament photo, workshop photo, team image, or badge.',
    media: [
      {
        title: 'AJETEC team',
        src: '/images/extras/ajetecc.jpeg',
        alt: 'AJETEC chess group photo',
        description: 'Chess group proof and team context.',
      },
      {
        title: 'AJETEC conference',
        src: '/images/extras/ajeteccconfe.jpeg',
        alt: 'AJETEC conference or workshop photo',
        description: 'Workshop or conference activity.',
      },
      {
        title: 'CONADEIP AJETEC',
        src: '/images/extras/conadeipajetec.jpeg',
        alt: 'CONADEIP AJETEC chess participation',
        description: 'Inter-university participation proof.',
      },
      {
        title: 'Champion proof',
        src: '/images/extras/campeonn.jpeg',
        alt: 'Chess champion proof',
        description: 'Competitive chess achievement proof.',
      },
      {
        title: 'Tournament board',
        src: '/images/extras/FOTO10.jpg',
        alt: 'Chess tournament board photo',
        description: 'Tournament day and over-the-board play context.',
      },
      {
        title: 'Award ceremony',
        src: '/images/extras/FOTO11.jpg',
        alt: 'Chess award ceremony photo',
        description: 'Recognition from a competitive chess event.',
      },
      {
        title: 'National runner-up',
        src: '/images/extras/FOTO12.jpg',
        alt: 'National runner-up chess proof',
        description: 'Competitive chess result and tournament proof.',
      },
      {
        title: 'Match play',
        src: '/images/extras/FOTO15.JPG',
        alt: 'Chess match photo',
        description: 'Live match play during chess activities.',
      },
      {
        title: 'Trophy moment',
        src: '/images/extras/FOTO4.jpg',
        alt: 'Chess trophy photo',
        description: 'Achievement moment from chess competition.',
      },
      {
        title: 'Workshop table',
        src: '/images/extras/FOTO5.jpg',
        alt: 'Chess workshop table photo',
        description: 'Training and community activity around chess.',
      },
      {
        title: 'Focused game',
        src: '/images/extras/FOTO6.jpg',
        alt: 'Chess player focused on a game',
        description: 'Competitive focus and tournament atmosphere.',
      },
      {
        title: 'Chess table',
        src: '/images/extras/FOTO7.jpg',
        alt: 'Chess board game photo',
        description: 'Over-the-board play and practice context.',
      },
      {
        title: 'Tournament setup',
        src: '/images/extras/FOTO9.jpg',
        alt: 'Chess tournament setup photo',
        description: 'Event setup and competitive chess environment.',
      },
    ],
  },
  {
    id: 'peer-mentor',
    title: 'Peer Mentor',
    date: '2023 - Present',
    period: '2023 - Present',
    org: 'Tecnologico de Monterrey',
    body:
      'Guided first-year students through academic transition and completed the Peer Mentorship Diploma with digital badge.',
    link: links.linkedin,
    icon: <FiUsers />,
    accent: 'violet',
    coverImage: '/images/extras/BADGEPEERMENTOR.jpeg',
    moves: ['First-year guidance', 'Mentorship diploma', 'Academic transition', 'Student support'],
    details: [
      'Completed the Peer Mentorship Diploma at Tecnologico de Monterrey as part of my role as a Peer Mentor in the FORTA community.',
      'Supported incoming students across three semesters, helping them adapt academically, socially, and personally to university life.',
      'Built safe and approachable spaces where mentees felt comfortable asking questions, sharing concerns, and seeking advice.',
      'Received a 9.8/10 evaluation across categories including campus orientation, availability, inclusion, and support quality.',
      'Strengthened my leadership through consistent presence, empathy, active listening, and responsibility toward my student community.',
    ],
    mediaSlot: 'Add later: mentorship badge, diploma proof, or peer mentor event image.',
    media: [
      {
        title: 'Peer mentor badge',
        src: '/images/extras/BADGEPEERMENTOR.jpeg',
        alt: 'Peer mentor badge',
        description: 'Digital badge proof for peer mentorship.',
      },
      {
        title: 'Peer mentor group',
        src: '/images/extras/PEERMENTOR.jpeg',
        alt: 'Peer mentor group image',
        description: 'Mentorship context and student support.',
      },
      {
        title: 'Peer mentor activity',
        src: '/images/extras/PEERMENTORRR.jpeg',
        alt: 'Peer mentor activity image',
        description: 'Additional proof from mentorship work.',
      },
    ],
  },
];

const volunteering = [
  {
    id: 'fifa-volunteer',
    period: 'May 2026 - Jul 2026',
    title: 'Pre-Match Ceremony Volunteer',
    org: 'FIFA World Cup 2026, Monterrey',
    body:
      'Volunteered in Pre-Match Ceremony operations for the FIFA World Cup 2026 in Monterrey, supporting on-field flag deployment and behind-the-scenes coordination for one of the world’s biggest sporting events.',
    link: 'https://volunteer.fifa.com/',
    hideProofAction: true,
    icon: <FiFlag />,
    accent: 'coral',
    coverImage: '/images/extras/FOTOMIAFIFA.jpeg',
    moves: ['Ceremony operations', 'Flag deployment', 'International teamwork', 'Fast coordination'],
    details: [
      'Participated as a PMC volunteer, collaborating in the ceremonies before matches and helping extend national team flags on the field.',
      'Experienced football from a completely different perspective: inside the stadium, close to the operational rhythm behind each match.',
      'Worked in an international event environment where timing, teamwork, communication, and attention to detail mattered constantly.',
      'Met people from different backgrounds and learned how much coordination exists behind moments that thousands of fans experience in seconds.',
      'Built memories, friendships, and a deeper appreciation for the work behind major sports events while contributing to an unforgettable fan experience.',
      'The volunteer certificate represents one of the most special experiences of my life as a lifelong football fan.',
    ],
    mediaSlot: 'Add later: FIFA volunteer badge/photo, uniform photo, venue photo, or volunteer certificate.',
    media: [
      {
        title: 'FIFA volunteer photo',
        src: '/images/extras/FOTOMIAFIFA.jpeg',
        alt: 'FIFA volunteer photo',
        description: 'Volunteer proof from the FIFA World Cup 2026 context.',
      },
      {
        title: 'FIFA volunteer portrait',
        src: '/images/extras/FOTOMIAFIFA2.jpeg',
        alt: 'FIFA volunteer second photo',
        description: 'Additional volunteer photo.',
      },
      {
        title: 'FIFA stadium panorama',
        src: '/images/extras/PANORAMICAFIFA.jpeg',
        alt: 'FIFA stadium panoramic photo',
        description: 'Event environment and venue context.',
      },
      {
        title: 'FIFA friends',
        src: '/images/extras/fifa_amigos.jpeg',
        alt: 'FIFA volunteer friends photo',
        description: 'Volunteer team and community context.',
      },
      {
        title: 'FIFA certificate',
        src: '/images/extras/CERTIFICADOFIFA.jpeg',
        alt: 'FIFA volunteer certificate',
        description: 'Volunteer certificate proof.',
      },
    ],
  },
  {
    id: 'incmty-staff',
    title: 'INCmty Festival Staff',
    date: 'Mar 17 - Mar 20, 2026',
    period: 'Mar 17 - Mar 20, 2026',
    org: 'Production and Operations Staff, INCmty Festival 2026',
    body:
      'Supported production and operations for the 13th edition of INCmty Festival 2026 in Monterrey, contributing behind the scenes to one of Latin America’s major innovation, AI, and entrepreneurship festivals.',
    link: links.linkedin,
    hideProofAction: true,
    icon: <FiZap />,
    accent: 'blue',
    coverImage: '/images/extras/INCMTY.jpeg',
    moves: [
      'Production and operations support',
      'Large-scale event execution with 10,000+ attendees',
      'Adaptation under pressure across four festival days',
      'Innovation, AI, startup, investor, and global company ecosystem exposure',
    ],
    details: [
      'Contributed to the production and operation of the 13th edition of INCmty Festival 2026, held from March 17 to March 20, 2026.',
      'Supported an event that brought together attendees from more than 20 countries around technology, entrepreneurship, startups, investors, and global companies.',
      'Strengthened teamwork, problem solving, adaptability under pressure, and execution skills in a large-scale event environment.',
      'Gained exposure to an innovation ecosystem involving companies and communities connected to AI, entrepreneurship, and future-facing technology.',
      'Helped behind the scenes during four intense festival days, contributing to the operational flow of talks, experiences, and attendee movement.',
      'Left with a stronger interest in participating in projects where technology, innovation, entrepreneurship, and community impact intersect.',
    ],
    media: [
      {
        title: 'INCmty event',
        src: '/images/extras/INCMTY.jpeg',
        alt: 'INCmty event image',
        description: 'Festival identity and event context.',
      },
      {
        title: 'INCmty certificate',
        src: '/images/extras/INCMTYCERTIFICADO.jpeg',
        alt: 'INCmty certificate image',
        description: 'Recognition for production and operation support at INCmty Festival 2026.',
      },
      {
        title: 'INCmty staff photo',
        src: '/images/extras/INCMTYFOTO.jpeg',
        alt: 'INCmty staff participation photo',
        description: 'Behind-the-scenes participation and operations context.',
      },
    ],
  },
];

const stack = [
  { label: 'Python', icon: <FaPython />, genre: 'Automation' },
  { label: 'React', icon: <FaReact />, genre: 'Frontend' },
  { label: 'Node.js', icon: <FaNodeJs />, genre: 'Backend' },
  { label: 'Swift', icon: <FaSwift />, genre: 'Mobile' },
  { label: 'Java', icon: <FaJava />, genre: 'Foundations' },
  { label: 'C++', icon: <SiCplusplus />, genre: 'Algorithms' },
  { label: 'SQL', icon: <SiMysql />, genre: 'Data' },
  { label: 'Oracle', icon: <SiOracle />, genre: 'Enterprise' },
  { label: 'R', icon: <SiR />, genre: 'Analytics' },
  { label: 'Supabase', icon: <SiSupabase />, genre: 'Platform' },
  { label: 'Core ML', icon: <FiCpu />, genre: 'AI' },
];

const fadeIn = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-90px' },
  transition: { duration: 0.55, ease: 'easeOut' },
};

const audioPlaylist = [
  {
    title: 'Joyful Rhythm Walk',
    artist: 'Lightbeatsmusic',
    src: '/audio/lightbeatsmusic-joyful-rhythm-walk-funk-513936.mp3',
    fallbackDuration: 207,
  },
  {
    title: 'Dance Playful Night',
    artist: 'Alexzavesa',
    src: '/audio/alexzavesa-dance-playful-night-510786.mp3',
    fallbackDuration: 184,
  },
  {
    title: 'Funk & Breakbeat',
    artist: 'Alexguz',
    src: '/audio/alexguz-funk-amp-breakbeat-541097.mp3',
    fallbackDuration: 221,
  },
];

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(seconds));
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = String(safeSeconds % 60).padStart(2, '0');
  return `${minutes}:${remainingSeconds}`;
}

function usePlaylistAudio() {
  const audioRef = useRef(null);
  const [trackIndex, setTrackIndex] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(audioPlaylist[0].fallbackDuration);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(64);
  const [isMissing, setIsMissing] = useState(false);
  const currentTrack = audioPlaylist[trackIndex];

  useEffect(() => {
    audioRef.current = new Audio();
    audioRef.current.preload = 'metadata';

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : currentTrack.fallbackDuration);
      setIsMissing(false);
    };
    const handleEnded = () => {
      setTrackIndex((index) => (index + 1) % audioPlaylist.length);
      setElapsed(0);
    };
    const handleError = () => {
      setIsPlaying(false);
      setIsMissing(true);
      setElapsed(0);
      setDuration(currentTrack.fallbackDuration);
    };

    audio.pause();
    audio.src = currentTrack.src;
    audio.currentTime = 0;
    setElapsed(0);
    setDuration(currentTrack.fallbackDuration);
    setIsMissing(false);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.load();

    if (isPlaying) {
      audio.play().catch(handleError);
    }

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  useEffect(() => {
    if (!isPlaying) return undefined;

    let animationFrame;
    const tick = () => {
      const audio = audioRef.current;
      setElapsed(audio?.currentTime || 0);
      animationFrame = window.requestAnimationFrame(tick);
    };

    animationFrame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [isPlaying]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setElapsed(audio.currentTime || elapsed);
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsMissing(false);
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setIsMissing(true);
    }
  };

  const nextTrack = () => {
    setTrackIndex((index) => (index + 1) % audioPlaylist.length);
  };

  const previousTrack = () => {
    const audio = audioRef.current;
    if (audio && audio.currentTime > 3) {
      audio.currentTime = 0;
      setElapsed(0);
      return;
    }
    setTrackIndex((index) => (index - 1 + audioPlaylist.length) % audioPlaylist.length);
  };

  return {
    currentTrack,
    duration,
    elapsed,
    isMissing,
    isPlaying,
    nextTrack,
    previousTrack,
    setVolume,
    togglePlay,
    volume,
  };
}

const recordCollections = {
  education: { label: 'Education', records: education, icon: <FiBookOpen /> },
  experience: { label: 'Experience', records: experience, icon: <FiBriefcase /> },
  leadership: { label: 'Leadership', records: leadership, icon: <FiUsers /> },
  volunteering: { label: 'Volunteering', records: volunteering, icon: <FiFlag /> },
};

function App() {
  const [filter, setFilter] = useState('All');
  const [route, setRoute] = useState(() => window.location.pathname);
  const [activeProjectId, setActiveProjectId] = useState(projects[0]?.id);
  const playback = usePlaylistAudio();

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projects;
    return projects.filter((project) => project.tags.includes(filter));
  }, [filter]);

  const routeProjectId = route.match(/^\/project\/([^/]+)/)?.[1];
  const routeRecordMatch = route.match(/^\/(education|experience|leadership|volunteering)\/([^/]+)/);
  const selectedProject = projects.find((project) => project.id === routeProjectId) || projects[0];
  const activeProject = projects.find((project) => project.id === activeProjectId) || projects[0];
  const selectedCollection = routeRecordMatch ? recordCollections[routeRecordMatch[1]] : null;
  const selectedRecord = selectedCollection?.records.find((item) => item.id === routeRecordMatch[2]);

  useEffect(() => {
    const syncRoute = () => setRoute(window.location.pathname);
    window.addEventListener('popstate', syncRoute);
    return () => window.removeEventListener('popstate', syncRoute);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, '', path);
    setRoute(window.location.pathname);
    const hash = path.includes('#') ? path.split('#')[1] : '';

    window.requestAnimationFrame(() => {
      if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  };

  const shell = (children) => (
    <div className="spotify-shell">
      <Sidebar navigate={navigate} />
      <main className="spotify-main">{children}</main>
      <NowPlayingBar project={activeProject} playback={playback} />
    </div>
  );

  if (routeProjectId) {
    return shell(<ProjectPage project={selectedProject} navigate={navigate} setActiveProjectId={setActiveProjectId} />);
  }

  if (selectedRecord && selectedCollection) {
    return shell(<RecordPage record={selectedRecord} collection={selectedCollection} type={routeRecordMatch[1]} navigate={navigate} />);
  }

  return shell(
    <>
      <Hero activeProject={activeProject} navigate={navigate} playback={playback} />
      <Education navigate={navigate} />
      <Experience navigate={navigate} />
      <Projects
        filter={filter}
        setFilter={setFilter}
        projects={filteredProjects}
        activeProject={activeProject}
        setActiveProjectId={setActiveProjectId}
        navigate={navigate}
      />
      <Leadership navigate={navigate} />
      <Volunteering navigate={navigate} />
      <Stack />
      <About />
      <Contact />
    </>
  );
}

function Sidebar({ navigate }) {
  const goHomeSection = (href) => (event) => {
    if (window.location.pathname !== '/') {
      event.preventDefault();
      navigate(`/${href}`);
    }
  };

  return (
    <aside className="sidebar">
      <a
        className="sidebar-brand"
        href="/"
        onClick={(event) => {
          event.preventDefault();
          navigate('/');
        }}
      >
        <span className="brand-disc"><FiHeadphones /></span>
        <span>
          <strong>Diego</strong>
          <small>Software Engineer</small>
        </span>
      </a>

      <nav className="sidebar-nav" aria-label="Primary navigation">
        {navItems.map(([label, href, icon]) => (
          <a key={href} href={href} onClick={goHomeSection(href)}>
            {icon}
            <span>{label}</span>
          </a>
        ))}
      </nav>

      <div className="sidebar-playlist">
        <span>Featured Playlists</span>
        <a href="#projects" onClick={goHomeSection('#projects')}>Popular Projects</a>
        <a href="#leadership" onClick={goHomeSection('#leadership')}>Campus Leadership</a>
        <a href="#genres" onClick={goHomeSection('#genres')}>Skills / Genres</a>
      </div>

      <div className="sidebar-links">
        <a href={links.github} target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
      </div>
    </aside>
  );
}

function Hero({ activeProject, navigate, playback }) {
  const progress = playback.duration ? (playback.elapsed / playback.duration) * 100 : 0;

  return (
    <section id="top" className="hero-section">
      <motion.div
        className="hero-album"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="profile-cover">
          <img src="/images/profile/diego-profile.jpeg" alt="Diego Garcia Gonzalez portrait" />
          <div className="cover-rings" aria-hidden="true" />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Portfolio playlist</p>
          <h1>Diego Garcia Gonzalez</h1>
          <h2>Software Engineer</h2>
          <p>
            Full-stack, AI, mobile, data, and leadership work arranged like a clean product experience.
          </p>
          <div className="hero-actions">
            <a className="play-action" href="#projects">
              <FiPlay />
              <span>View Projects</span>
            </a>
            <a className="ghost-action" href={links.resume} target="_blank" rel="noreferrer">
              <FiDownload />
              <span>Resume</span>
            </a>
            <a className="ghost-action" href={links.github} target="_blank" rel="noreferrer">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a className="ghost-action" href={links.email}>
              <FiMail />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.div className="currently-playing" {...fadeIn}>
        <div className="section-label">
          <FiMusic />
          <span>Currently Playing</span>
        </div>
        <button type="button" className="now-card" onClick={() => navigate('/experience/junior-developer')}>
          <span className="pulse-play"><FiPauseCircle /></span>
          <div>
            <strong>Junior Developer</strong>
            <small>Digital Transformation, Tecnologico de Monterrey</small>
          </div>
          <FiArrowUpRight />
        </button>
        <div className="progress-block" aria-hidden="true">
          <span>{formatTime(playback.elapsed)}</span>
          <div><i style={{ width: `${progress}%` }} /></div>
          <span>{formatTime(playback.duration)}</span>
        </div>
        <p>
          Building automations, dashboards, and internal web tools with a focus on useful software, not noise.
        </p>
      </motion.div>

      <div className="hero-feature">
        <ProjectArtwork project={activeProject} />
        <div>
          <span>Featured case study</span>
          <strong>{activeProject.title}</strong>
          <p>{activeProject.oneLine}</p>
          <button type="button" onClick={() => navigate(`/project/${activeProject.id}`)}>
            Open case study
            <FiArrowUpRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, icon, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-label">
        {icon}
        <span>{kicker}</span>
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

function ProjectArtwork({ project, compact = false }) {
  const blackPiece = project.id === 'moves' ? '♛' : project.id === 'gategenius' ? '♞' : project.id === 'machtia' ? '♟' : '♜';

  return (
    <div className={`project-artwork project-${project.id} gradient-${project.gradient} ${compact ? 'compact' : ''}`}>
      {project.coverImage && <img src={project.coverImage} alt={project.coverAlt || `${project.title} project image`} loading="lazy" />}
      <div className="artwork-overlay" aria-hidden="true" />
      <div className="artwork-type">
        <span>{blackPiece}</span>
        <strong>{project.title}</strong>
      </div>
    </div>
  );
}

function Education({ navigate }) {
  return (
    <motion.section id="education" className="content-section" {...fadeIn}>
      <SectionHeading
        kicker="Education"
        icon={<FiBookOpen />}
        title="Academic track"
        copy="Computer Science foundation, scholarship, Top 1% recognition, and leadership track."
      />
      <RecordRowList records={education} type="education" navigate={navigate} />
    </motion.section>
  );
}

function Experience({ navigate }) {
  return (
    <motion.section id="experience" className="content-section" {...fadeIn}>
      <SectionHeading
        kicker="Experience"
        icon={<FiBriefcase />}
        title="Professional tracks"
        copy="Short on the surface, detailed inside each page."
      />
      <RecordRowList records={experience} type="experience" navigate={navigate} />
    </motion.section>
  );
}

function Projects({ filter, setFilter, projects: visibleProjects, activeProject, setActiveProjectId, navigate }) {
  return (
    <motion.section id="projects" className="content-section projects-section" {...fadeIn}>
      <SectionHeading
        kicker="Popular Projects"
        icon={<FiTerminal />}
        title="Case studies as tracks"
        copy="Skimmable rows first. Open any project for architecture, impact, media, and proof."
      />

      <div className="project-stage">
        <ProjectArtwork project={activeProject} />
        <div className="stage-copy">
          <span>On repeat</span>
          <h3>{activeProject.title}</h3>
          <p>{activeProject.differentiator}</p>
          <div className="stage-tags">
            {activeProject.primaryTech.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
          </div>
          <button type="button" className="play-action" onClick={() => navigate(`/project/${activeProject.id}`)}>
            <FiPlay />
            <span>Open</span>
          </button>
        </div>
      </div>

      <div className="filter-row" aria-label="Project filters">
        {projectFilters.map((item) => (
          <button key={item} className={filter === item ? 'is-active' : ''} type="button" onClick={() => setFilter(item)}>
            {item}
          </button>
        ))}
      </div>

      <div className="track-table" role="list" aria-label="Popular projects">
        {visibleProjects.map((project, index) => (
          <a
            key={project.id}
            href={`/project/${project.id}`}
            className="track-row"
            onMouseEnter={() => setActiveProjectId(project.id)}
            onFocus={() => setActiveProjectId(project.id)}
            onClick={(event) => {
              event.preventDefault();
              setActiveProjectId(project.id);
              navigate(`/project/${project.id}`);
            }}
          >
            <span className="track-index">{String(index + 1).padStart(2, '0')}</span>
            <ProjectArtwork project={project} compact />
            <span className="track-title">
              <strong>{project.title}</strong>
              <small>{project.subtitle}</small>
            </span>
            <span className="track-stack">{project.primaryTech.slice(0, 3).join(' / ')}</span>
            <span className="track-role">{project.context}</span>
            <FiArrowUpRight />
          </a>
        ))}
      </div>
    </motion.section>
  );
}

function RecordRowList({ records, type, navigate }) {
  return (
    <div className="record-list">
      {records.map((item, index) => (
        <a
          key={item.id}
          className={`record-row accent-${item.accent}`}
          href={`/${type}/${item.id}`}
          onClick={(event) => {
            event.preventDefault();
            navigate(`/${type}/${item.id}`);
          }}
        >
          <span className="track-index">{String(index + 1).padStart(2, '0')}</span>
          <span className="record-icon">{item.icon}</span>
          <span className="track-title">
            <strong>{item.title}</strong>
            <small>{item.org}</small>
          </span>
          <span className="track-stack">{item.period || item.date}</span>
          <FiArrowUpRight />
        </a>
      ))}
    </div>
  );
}

function Leadership({ navigate }) {
  return (
    <motion.section id="leadership" className="content-section" {...fadeIn}>
      <SectionHeading
        kicker="Leadership"
        icon={<FiUsers />}
        title="Campus leadership"
        copy="SEITC, AJETEC, and mentoring each now has its own page."
      />
      <div className="playlist-grid">
        {leadership.map((item) => (
          <CollectionCard key={item.id} item={item} type="leadership" navigate={navigate} />
        ))}
      </div>
    </motion.section>
  );
}

function Volunteering({ navigate }) {
  return (
    <motion.section id="volunteering" className="content-section" {...fadeIn}>
      <SectionHeading
        kicker="Volunteering"
        icon={<FiFlag />}
        title="Service and operations"
        copy="International volunteering, production support, and large-scale event execution."
      />
      <div className="playlist-grid">
        {volunteering.map((item) => (
          <CollectionCard key={item.id} item={item} type="volunteering" navigate={navigate} />
        ))}
      </div>
    </motion.section>
  );
}

function CollectionCard({ item, type, navigate }) {
  return (
    <a
      className={`collection-card item-${item.id} accent-${item.accent}`}
      href={`/${type}/${item.id}`}
      onClick={(event) => {
        event.preventDefault();
        navigate(`/${type}/${item.id}`);
      }}
    >
      <div className="collection-cover">
        {item.coverImage ? (
        <img src={item.coverImage} alt={`${item.title} cover`} loading="lazy" />
        ) : (
          item.icon
        )}
        <FiPlay />
      </div>
      <span>{item.period || item.date}</span>
      <h3>{item.title}</h3>
      <p>{item.org}</p>
    </a>
  );
}

function Stack() {
  return (
    <motion.section id="genres" className="content-section" {...fadeIn}>
      <SectionHeading
        kicker="Skills / Genres"
        icon={<FiDisc />}
        title="Technical genres"
        copy="Grouped like a music library: fast to scan, easy to remember."
      />
      <div className="genre-grid">
        {stack.map((item) => (
          <article key={item.label}>
            {item.icon}
            <strong>{item.label}</strong>
            <span>{item.genre}</span>
          </article>
        ))}
      </div>
    </motion.section>
  );
}

function About() {
  return (
    <motion.section id="about" className="content-section about-section" {...fadeIn}>
      <SectionHeading kicker="About Me" icon={<FiUser />} title="Builder with product taste" />
      <div className="about-card">
        <p>
          I build software end to end: backend logic, user-facing interfaces, data workflows, AI-assisted products,
          and systems that people can actually understand.
        </p>
        <div>
          <span><FiCode /> Full-stack products</span>
          <span><FiBarChart2 /> AI and data systems</span>
          <span><FiAward /> Academic excellence</span>
          <span><FiUsers /> Leadership under pressure</span>
        </div>
      </div>
    </motion.section>
  );
}

function Contact() {
  return (
    <motion.section id="contact" className="contact-section" {...fadeIn}>
      <div>
        <p className="eyebrow">Final track</p>
        <h2>Bring me the problem. I will bring code, strategy, and momentum.</h2>
      </div>
      <div className="contact-actions">
        <a className="play-action" href={links.email}><FiMail /><span>Email</span></a>
        <a className="ghost-action" href={links.github} target="_blank" rel="noreferrer"><FaGithub /><span>GitHub</span></a>
        <a className="ghost-action" href={links.linkedin} target="_blank" rel="noreferrer"><FaLinkedin /><span>LinkedIn</span></a>
      </div>
    </motion.section>
  );
}

function NowPlayingBar({ project, playback }) {
  const progress = playback.duration ? (playback.elapsed / playback.duration) * 100 : 0;

  return (
    <aside className="player-bar" aria-label="Currently selected project">
      <div className="player-track">
        <ProjectArtwork project={project} compact />
        <div className="player-track-info">
          <strong>{project.title}</strong>
          <span>{project.primaryTech.slice(0, 3).join(' / ')}</span>
        </div>
      </div>
      <div className="player-controls">
        <div className="player-action-row" aria-label="Playback controls">
          <button type="button" aria-label="Shuffle project order"><FiShuffle /></button>
          <button type="button" aria-label="Previous track" onClick={playback.previousTrack}><FiSkipBack /></button>
          <button
            type="button"
            className={`main-play ${playback.isPlaying ? 'is-playing' : ''}`}
            aria-label={playback.isPlaying ? 'Pause background music' : 'Play background music'}
            onClick={playback.togglePlay}
          >
            {playback.isPlaying ? <FiPauseCircle /> : <FiPlay />}
          </button>
          <button type="button" aria-label="Next track" onClick={playback.nextTrack}><FiSkipForward /></button>
          <button type="button" aria-label="Repeat current project"><FiRepeat /></button>
        </div>
        <div className="player-progress-row" aria-hidden="true">
          <span>{formatTime(playback.elapsed)}</span>
          <div className="mini-progress"><i style={{ width: `${progress}%` }} /></div>
          <span>{formatTime(playback.duration)}</span>
        </div>
      </div>
      <div className="player-tools" aria-label="Player tools">
        <FiMonitor />
        <FiList />
        <FiMaximize2 />
      </div>
      <div className="player-volume">
        <FiVolume2 />
        <input
          aria-label="Visual volume"
          max="100"
          min="0"
          onChange={(event) => playback.setVolume(Number(event.target.value))}
          style={{ '--volume': `${playback.volume}%` }}
          type="range"
          value={playback.volume}
        />
      </div>
    </aside>
  );
}

function DetailList({ title, kicker, items }) {
  return (
    <article className="detail-panel">
      <span>{kicker}</span>
      <h2>{title}</h2>
      <ul>
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </article>
  );
}

function ProjectGalleryItem({ item, index }) {
  const media = typeof item === 'string' ? { title: item } : item;

  if (media.src) {
    return (
      <figure className={`proof-card image-proof ${media.className || ''}`}>
        <img src={media.src} alt={media.alt || media.title} loading="lazy" />
      </figure>
    );
  }

  return (
    <article className="proof-card placeholder-proof">
      <span>{String(index + 1).padStart(2, '0')}</span>
      <strong>{media.title}</strong>
      <p>{media.description || 'Add screenshot, photo, diagram, or demo clip here when available.'}</p>
      {media.href && (
        <a href={media.href} target="_blank" rel="noreferrer">
          Open proof
          <FiArrowUpRight />
        </a>
      )}
    </article>
  );
}

function ProjectPage({ project, navigate, setActiveProjectId }) {
  const projectIndex = projects.findIndex((item) => item.id === project.id);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  useEffect(() => {
    setActiveProjectId(project.id);
  }, [project.id, setActiveProjectId]);

  return (
    <motion.section className="detail-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <DetailHero
        kicker="Case Study"
        title={project.title}
        subtitle={project.subtitle}
        body={project.oneLine}
        meta={[project.role, project.dates, project.partner]}
        artwork={<ProjectArtwork project={project} />}
        onBack={() => navigate('/#projects')}
      />

      <div className="detail-actions">
        <a className="play-action" href={project.link || links.github} target="_blank" rel="noreferrer">
          <FiExternalLink />
          <span>Open proof</span>
        </a>
        {project.demo && (
          <a className="ghost-action" href={project.demo} target="_blank" rel="noreferrer">
            <FiExternalLink />
            <span>Demo</span>
          </a>
        )}
        <button className="ghost-action" type="button" onClick={() => navigate(`/project/${nextProject.id}`)}>
          <span>Next project</span>
          <FiArrowUpRight />
        </button>
      </div>

      {project.proofLinks?.length > 0 && (
        <div className="link-strip">
          {project.proofLinks.map((proof) => (
            <a key={proof.href} href={proof.href} target="_blank" rel="noreferrer">
              {proof.label}
              <FiArrowUpRight />
            </a>
          ))}
        </div>
      )}

      <div className="two-column-detail">
        <article className="summary-card">
          <span>Problem</span>
          <p>{project.problem}</p>
        </article>
        <article className="summary-card">
          <span>Solution</span>
          <p>{project.solution}</p>
        </article>
      </div>

      <div className="tag-cloud">
        {project.stack.map((tech) => <span key={tech}>{tech}</span>)}
      </div>

      <div className="detail-grid">
        <DetailList title="Personal contribution" kicker="My work" items={project.contribution} />
        <DetailList title="Key features" kicker="Product surface" items={project.features} />
        <DetailList title="Impact and results" kicker="Outcome" items={project.impact} />
        <DetailList title="Lessons learned" kicker="Reflection" items={project.lessons} />
      </div>

      <section className="content-section flush">
        <SectionHeading kicker="Architecture" icon={<FiLayers />} title="Technical flow" />
        <div className="architecture-flow">
          {project.architecture.map((step, index) => (
            <div key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      {project.media.length > 0 && (
        <section className="content-section flush media-strip">
          <div className="proof-grid">
            {project.media.map((item, index) => (
              <ProjectGalleryItem key={typeof item === 'string' ? item : item.title} item={item} index={index} />
            ))}
          </div>
        </section>
      )}

      <div className="project-switcher">
        <button type="button" onClick={() => navigate(`/project/${previousProject.id}`)}>
          <span>{previousProject.title}</span>
          Previous
        </button>
        <button type="button" onClick={() => navigate(`/project/${nextProject.id}`)}>
          <span>{nextProject.title}</span>
          Next
        </button>
      </div>
    </motion.section>
  );
}

function RecordPage({ record, collection, type, navigate }) {
  const peers = collection.records;
  const currentIndex = peers.findIndex((item) => item.id === record.id);
  const next = peers[(currentIndex + 1) % peers.length];

  return (
    <motion.section className="detail-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }}>
      <DetailHero
        kicker={collection.label}
        title={record.title}
        subtitle={record.org}
        body={record.body}
        meta={[record.period || record.date, record.org, collection.label]}
        artwork={<RecordArtwork record={record} />}
        onBack={() => navigate(`/#${type}`)}
      />

      <div className="detail-actions">
        {!record.hideProofAction && (
          <a className="play-action" href={record.link || links.linkedin} target="_blank" rel="noreferrer">
            <FiExternalLink />
            <span>Open proof</span>
          </a>
        )}
        {next && next.id !== record.id && (
          <button className="ghost-action" type="button" onClick={() => navigate(`/${type}/${next.id}`)}>
            <span>Next in collection</span>
            <FiArrowUpRight />
          </button>
        )}
      </div>

      <div className="detail-grid record-detail-grid">
        <DetailList title="Highlights" kicker="Track list" items={record.moves} />
        {record.details?.length > 0 && <DetailList title="Role scope" kicker="What I did" items={record.details} />}
        {!record.noMedia && record.mediaSlot && !record.media?.length && (
          <article className="detail-panel">
            <span>Media</span>
            <h2>Media coming soon</h2>
            <p>{record.mediaSlot}</p>
          </article>
        )}
      </div>
      {record.media?.length > 0 && (
        <section className="content-section flush media-strip">
          <div className="proof-grid">
            {record.media.map((item, index) => (
              <ProjectGalleryItem key={item.title} item={item} index={index} />
            ))}
          </div>
        </section>
      )}
    </motion.section>
  );
}

function DetailHero({ kicker, title, subtitle, body, meta, artwork, onBack }) {
  return (
    <header className="detail-hero">
      <button className="back-button" type="button" onClick={onBack}>
        <FiArrowUpRight />
        <span>Back</span>
      </button>
      <div className="detail-art">{artwork}</div>
      <div className="detail-copy">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{body}</p>
        <div className="detail-meta">
          {meta.filter(Boolean).map((item) => <span key={item}>{item}</span>)}
        </div>
      </div>
    </header>
  );
}

function RecordArtwork({ record }) {
  return (
    <div className={`record-artwork record-${record.id} ${record.coverImage ? 'has-cover' : ''} accent-${record.accent}`}>
      {record.coverImage ? (
        <img src={record.coverImage} alt={`${record.title} cover`} loading="lazy" />
      ) : (
        <div>{record.icon}</div>
      )}
      <strong>{record.title}</strong>
      <span>{record.period || record.date}</span>
    </div>
  );
}

export default App;
