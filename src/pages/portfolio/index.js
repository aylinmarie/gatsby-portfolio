import React, {useEffect, useState} from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Banner from '../../components/Banner'

import Grid from '@material-ui/core/Grid';

import stylesheet from './Portfolio.module.less'

// Images
import coco from '../../images/portfolio/coco_portfolio.png'
import bor from '../../images/portfolio/bor_portfolio.png'
import oyt from '../../images/portfolio/oyt_portfolio.png'
import cs from '../../images/portfolio/camille_portfolio.png'
import atoh from '../../images/portfolio/atoh_portfolio.jpg'
import sofluencial from '../../images/portfolio/sofluencial_portfolio.png'

const PortfolioItems = [
  {name:'Coco Interiors', src: coco, category:['all','design','development'],},
  {name:'A Touch of Heart', src: atoh, category:['all','design'],},
  {name:'Camille Simone Consulting', src: cs, category:['all','design','development'],},
  {name:'OneYoungTraveler', src: oyt, category:['all','design'],},
  {name:'Book of Rhymes', src: bor, category:['all','development', 'design'],},
  {name:'Sofluencial', src: sofluencial, category:['all','design'],},
]

const Portfolio = () => { 
  const [filter, setFilter] = useState('all');
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    setProjects(PortfolioItems);
  }, []);
  useEffect(() => {
    setProjects([]);
    const filtered = PortfolioItems.map(p => ({ ...p, filtered: p.category.includes(filter) }));
    setProjects(filtered);
  }, [filter]);
  
  return (
    <Layout>
      <SEO title="Portfolio" />
      <Banner>
        <h1>Portfolio</h1>
        <p className="h3">My work</p>
      </Banner>
      <section>
        <ul className={stylesheet.nav}>
          <li className="h3" active={(filter === 'all').toString()} onClick={() => setFilter('all')}>All</li>
          <li className="h3" active={(filter === 'design').toString()} onClick={() => setFilter('design')}>Design</li>
          <li className="h3" active={(filter === 'development').toString()} onClick={() => setFilter('development')}>Development</li>
        </ul>

        <Grid container className={stylesheet.gallery} spacing={4}>
          {projects.map(item => item.filtered === true ? 
            <Grid item className="images" key={item.name} data-class={item.dataClass} xs={12} sm={6} md={4}>
              <img src={item.src} alt={item.name} />
            </Grid>
            : '')}
        </Grid>
      </section>
    </Layout>
  )}

export default Portfolio
