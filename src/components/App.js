// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigate';
// import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Menu from './components/Menu';
// import Content from './components/Content';
// import Button from './components/Button';

// const labWorks = [
//     { title: 'Лабораторная работа 1', content: 'Содержимое лабораторной работы 1' },
//     { title: 'Лабораторная работа 2', content: 'Содержимое лабораторной работы 2' },
//     { title: 'Лабораторная работа 3', content: 'Содержимое лабораторной работы 3' },
// ];

// const App = () => {
//     const [selectedLab, setSelectedLab] = useState(labWorks[0]);

//     const handleSelectLab = (lab) => {
//         setSelectedLab(lab);
//     };

//     return (
//         <Router>
//             <Navigation />
//             <Container>
//                 <Header />
//                 <Routes>
//                     <Route path="/" element={
//                         <Grid container spacing={2}>
//                             <Grid item xs={12} md={4}>
//                                 <Menu labs={labWorks} onSelectLab={handleSelectLab} />
//                             </Grid>
//                             <Grid item xs={12} md={8}>
//                                 <Content selectedLab={selectedLab} />
//                             </Grid>
//                         </Grid>
//                     } />
//                     <Route path="/about" element={<h1>About Page</h1>} />
//                     <Route path="/contact" element={<h1>Contact Page</h1>} />
//                 </Routes>
//                 <Footer />
//             </Container>
//         </Router>
//     );
// };

// export default App;



import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Content from './components/Content';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

const labWorks = [
    { title: 'Лабораторная работа 1', content: 'Содержимое лабораторной работы 1' },
    { title: 'Лабораторная работа 2', content: 'Содержимое лабораторной работы 2' },
    { title: 'Лабораторная работа 3', content: 'Содержимое лабораторной работы 3' },
];

const App = () => {
    const [selectedLab, setSelectedLab] = useState(labWorks[0]);

    const handleSelectLab = (lab) => {
        setSelectedLab(lab);
    };

    return (
        <Container>
            <Header />
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <Menu labs={labWorks} onSelectLab={handleSelectLab} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Content selectedLab={selectedLab} />
                </Grid>
            </Grid>
            <Footer />
        </Container>
    );
};

export default App;