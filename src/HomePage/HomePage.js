import React from 'react';
import ChartJS from '../ChartJS/ChartJS';
import D3JS from '../D3JS/D3JS';


function HomePage() {
    
  return (
    
    <main className="container center" id = "main"> 
    <div className="page-area">
      <article className="text-box">
          <h1>Stay on track</h1>
          <p>
              Do you know where you are spending your money? If you really stop to track it down,
              you would get surprised! Proper budget management depends on real data... and this
              app will help you with that!
          </p>
      </article>

      <article className="text-box">
          <h1>Alerts</h1>
          <p>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
      </article>

      <article className="text-box">
          <h1>Results</h1>
          <p>
              People who stick to a financial plan, budgeting every expense, get out of debt faster!
              Also, they to live happier lives... since they expend without guilt or fear... 
              because they know it is all good and accounted for.
          </p>
      </article>

      <article className="text-box">
          <h1>Free</h1>
          <p>
              This app is free!!! And you are the only one holding your data!
          </p>
      </article>

      <article className="text-box">
          <h1>Stay on track</h1>
          <p>
              Do you know where you are spending your money? If you really stop to track it down,
              you would get surprised! Proper budget management depends on real data... and this
              app will help you with that!
          </p>
      </article>

      <article className="text-box">
          <h1>Alerts</h1>
          <p>
              What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
          </p>
      </article>

      <article className="text-box">
          <h1>D3js Chart</h1>
          <D3JS/> 
          
      </article>

      <article className="text-box">
          <h1>Chart</h1>
          <p>
            <ChartJS/>
          </p>
      </article>
    </div>
  </main> 
    
  );
}

export default HomePage;