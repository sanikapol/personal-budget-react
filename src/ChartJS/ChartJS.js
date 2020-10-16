import React, { useState, useEffect } from 'react';
import {Pie} from 'react-chartjs-2';
import axios from "axios";


function ChartJS() {
    const [dataSource, setDataSource] = useState({});

    const chart = () => {
        let cData = [];
        let cLabels = [];

        axios.get('http://localhost:3000/budget')
        .then ((res) => {
            //console.log(res);
            for (var i = 0; i < res.data.myBudget.length; i++){
                
                cData.push(res.data.myBudget[i].budget);
                cLabels.push(res.data.myBudget[i].title); 
            }
            setDataSource({
                datasets:[
                    {   
                        data: cData,
                        backgroundColor: [
                            '#ffcd56',
                            '#ff6384',
                            '#36a2eb',
                            '#fd6b19',
                            '#99ff33',
                            '#ff9900',
                            '#00ffcc',
                            '#99ff99',
                            '#cc66ff',
                            '#cc6699',
                            '#3366cc',
                            '#660066',
                        ],
                    }
                ],
                labels: cLabels
            })
        })
        .catch(err => {
            console.log(err);
        });
        //console.log(cData,cLabels);

    }

    useEffect(() => {
        chart();
    }, []);


    return (
        <Pie
        width = {200}
        height = {200}
        data={dataSource}    
        options={{
            title:{
            display:true,
            fontSize:30
            },
            legend:{
            display:true,
            position:'right'    
            }
        }}
        />
    ); 
}


export default ChartJS;

