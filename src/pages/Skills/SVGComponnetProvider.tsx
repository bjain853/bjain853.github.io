import { FC } from 'react';

import BashSvg from '../../assets/images/bash.svg';
import CssSvg from '../../assets/images/css.svg';
import GitSvg from '../../assets/images/git.svg';
import GraphqlSvg from '../../assets/images/graphql.svg';
import HtmlSvg from '../../assets/images/html.svg';
import JavaSvg from '../../assets/images/java.svg';
import MuiSvg from '../../assets/images/material-ui.svg';
import NumpySvg from '../../assets/images/numpy.svg';
import PythonSvg from '../../assets/images/python.svg';
import RSvg from '../../assets/images/R.svg';
import ReactSvg from '../../assets/images/react.svg';
import ResponsiveSvg from '../../assets/images/responsive.svg';
import RestApiSvg from '../../assets/images/rest2.svg';
import SciKitSvg from '../../assets/images/scikit.svg';
import SqlSvg from '../../assets/images/sql-database.svg';
import TailwindSvg from '../../assets/images/tailwindcss.svg';
import TypescriptSvg from '../../assets/images/typescript.svg';
import AwsSvg from '../../assets/images/aws.svg';
import CSvg from '../../assets/images/c.svg'
import PostgresSvg from '../../assets/images/postgresql.svg'
import JSSvg from '../../assets/images/javascript.svg'
import JiraSvg from '../../assets/images/jira.svg'
import SpringSvg from '../../assets/images/springio.svg'
import NodeSvg from '../../assets/images/nodejs.svg'


const SVGProviderFunctionComponent: FC<{ skill: string }> = ({ skill }) => {
    switch (skill) {
        case 'bash': return (<img src={BashSvg} />)
        case 'java': return (<img src={JavaSvg} />)
        case 'typescript': return (<img src={TypescriptSvg} />)
        case 'javascript': return (<img src={JSSvg} />)
        case 'sql': return (<img src={SqlSvg} />)
        case 'react': return (<img src={ReactSvg} />)
        case 'html': return (<img src={HtmlSvg} />)
        case 'tailwindcss': return (<img src={TailwindSvg} />)
        case 'material-ui': return (<img src={MuiSvg} />)
        case 'rest-api': return (<img src={RestApiSvg} />)
        case 'responsive design': return (<img src={ResponsiveSvg} />)
        case 'graphql': return (<img src={GraphqlSvg} />)
        case 'r': return (<img src={RSvg} />)
        case 'numpy': return (<img src={NumpySvg} />)
        case 'scikit': return (<img src={SciKitSvg} />)
        case 'git': return (<img src={GitSvg} />)
        case 'css': return (<img src={CssSvg} />)
        case 'python': return (<img src={PythonSvg} />)
        case 'aws': return (<img src={AwsSvg} />)
        case 'c': return (<img src={CSvg} />)
        case 'postgresql': return (<img src={PostgresSvg} />)
        case 'jira': return (<img src={JiraSvg} />)
        case 'springboot':return (<img src={SpringSvg}/>)
        case 'nodejs':return (<img src={NodeSvg}/>)
        default: return (<></>)

    }
}

export default SVGProviderFunctionComponent