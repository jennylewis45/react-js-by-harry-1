// import React, { Component } from 'react'
// import NewsItem from './NewsItem'

// export class News extends Component {
//    article=[
//     {
//       "status": "ok",
//       "totalResults": 3,
//       "articles": [
//         {
//           "source": { "id": "news-com-au", "name": "News.com.au" },
//           "author": null,
//           "title": "‘Cynical’: Big problem with Warnie biopic",
//           "description": "The two-part Channel 9 biopic Warnie, recapping Shane Warne&rsquo;s life on and off the cricket field is over, with many viewers questioning whether it was needed at all.",
//           "url": "https://www.news.com.au/sport/cricket/aussie-cricket-legend-annoyed-by-cynical-portrayal-of-shane-warne-in-warnie-biopic/news-story/93051826da2ae0d01af0c5a7037a0427",
//           "urlToImage": "https://content.api.news/v3/images/bin/5e816392eac1ba6be7c7685254364a7b",
//           "publishedAt": "2023-06-26T12:44:00Z",
//           "content": "The two-part Channel 9 biopic Warnie, recapping Shane Warne’s life on and off the cricket field is over, with many viewers questioning whether it was needed at all.\r\nThe controversial show was commis… [+3500 chars]"
//         },
//         {
//           "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//           "author": null,
//           "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//           "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//           "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//           "publishedAt": "2020-04-27T11:41:47Z",
//           "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//         },
//         {
//           "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
//           "author": null,
//           "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//           "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//           "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//           "publishedAt": "2020-03-30T15:26:05Z",
//           "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//         }
//       ]
//     }
    
//   ]
//   constructor(){
//     super();
//     console.log("hello")
//     this.state={
//       article:this.article,
//       loading:false

//     }
//    }
//    async componentDidMount(){
//     console.log("helloooo")
//     let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=1"
//     let data= await fetch(url)
//  let parsedata=await data.json()
//  console.log(parsedata)
//  this.setState({articles:parsedata.articles})
//    }
//    handlePrevClick=async ()=>{
// console.log("prev")
// let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=${this.state.page-1}`
// let data= await fetch(url)
// let parsedata=await data.json()
// console.log(parsedata)



// this.setState({
// page:this.state.page-1,
// articles:parsedata.articles
// })
//    }
// handleNextClick=async ()=>{
//   console.log("next")
//   let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=${this.state.page+1}`
//   let data= await fetch(url)
// let parsedata=await data.json()
// console.log(parsedata)


// this.setState({
//   page:this.state.page+1,
//   articles:parsedata.articles
// })
// }
//   render() {
//     console.log("hello")
//     return (
//       <div className='container my-3'>
//         <h2>NewsMonkey top headlines</h2>
//         <div className="row">
      
//       {this.state.article[0].articles.map((article)=>{
// return <div className="col md-4" key={article.url} >
// <NewsItem title={article.title.slice(0,45)} description={article.description.slice(0,88)} imageUrl={article.urlToImage} url={article.url}/>
// </div>
//       })}

 
       

//         </div>
//         <div className="container d-flex justify-content-between">
// <button disabled={true} onClick={this.handlePrevClick} type="button" class="btn btn-dark"> &larr; previous</button>
// <button onClick={this.handleNextClick} type="button" class="btn btn-dark">next &rarr;</button>

// </div>
        
       

//       </div>
//     )
//   }
// }

// export default News
// import React, {Component} from 'react';
// import NewsItem from './NewsItem';

// export class News extends Component {
//   constructor() {
//     super();
//     this.state = {
//       page: 1,
//       articles: [],
//       loading: false
//     };
//   }

//   async componentDidMount() {
//     console.log('helloooo');
//     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=1&pageSize=${this.props.pageSize}`;

//     let data = await fetch(url);
//     let parsedata = await data.json();
//     console.log(parsedata);
//     this.setState({articles: parsedata.articles ,totalResuts:parsedata.totalResuts});
//   }

//   handlePrevClick = async () => {
//     console.log('prev');
//     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedata = await data.json();
//     console.log(parsedata);

//     if (parsedata.articles && parsedata.articles.length > 0) {
//       this.setState({
//         page: this.state.page - 1,
//         articles: parsedata.articles
//       });
//     }
//   };

//   handleNextClick = async () => {
//     console.log('next');
//     let nextPage = this.state.page + 1;
//     let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=${nextPage}&pageSize=${this.props.pageSize}`;
//     let data = await fetch(url);
//     let parsedata = await data.json();
//     console.log(parsedata);
  
//     if (parsedata.articles && parsedata.articles.length > 0) {
//       this.setState({
//         page: nextPage,
//         articles: parsedata.articles
//       });
//     } else {
//       // Handle the case when there are no more articles available on the next page.
//       console.log('No more articles on the next page.');
//       // You can also disable the "Next" button here if you wish.
//     }
//   };
  

//   render() {
//     console.log('hello');
//     return (
//       <div className='container my-3'>
//         <h2>NewsMonkey top headlines</h2>
//         <div className='row'>
//         {this.state.articles.map((article) => (
//   <div className='col md-4' key={article.url}>
//     <NewsItem
//       title={article.title ? article.title : 'No Title'}
//       description={article.description ? article.description : 'No Description'}
//       imageUrl={article.urlToImage}
//       url={article.url}
//     />
//   </div>
// ))}

//         </div>
//         <div className='container d-flex justify-content-between'>
//           <button disabled={this.state.page === 1} onClick={this.handlePrevClick} type='button' className='btn btn-dark'>
//             &larr; previous
//           </button>
//           <button  onClick={this.handleNextClick} type='button' className='btn btn-dark'>
//             next &rarr;
//           </button>
//         </div>
//       </div>
//     );
//   }
// }

// export default News;


import React, { Component } from 'react';
import NewsItem from './NewsItem';


export class News extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      articles: [],
      loading: true, // Set loading to true initially to show a loader until data is fetched
    };
  }

  async componentDidMount() {
    await this.fetchNewsData();
  }

  async fetchNewsData() {
    console.log('Fetching data for page:', this.state.page);
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=289e4cd75b264424a2d47388a1a3118a&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedata = await data.json();
    console.log(parsedata);
    this.setState({ articles: parsedata.articles, totalResults: parsedata.totalResults, loading: false });
  }

  handlePrevClick = async () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1, loading: true }, () => {
        this.fetchNewsData();
      });
    }
  };

  handleNextClick = async () => {
    if (this.state.page < Math.ceil(this.state.totalResults / this.props.pageSize)) {
      this.setState({ page: this.state.page + 1, loading: true }, () => {
        this.fetchNewsData();
      });
    
    } else {
      console.log('No more articles on the next page.');
    }
    
  };

  render() {
    console.log('hello');
    return (
      <div className='container my-3'>
        <h1 className='text-center'>NewsMonkey top headlines</h1>
        
        {this.state.loading ? (
       <p>loading ...</p>// Show a loader while data is being fetched
        ) : (
          <>
            <div className='row'>
              {this.state.articles.map((article) => (
                <div className='col md-4' key={article.url}>
                  <NewsItem
                    title={article.title ? article.title : 'No Title'}
                    description={article.description ? article.description : 'No Description'}
                    imageUrl={article.urlToImage}
                    url={article.url}
                  />
                </div>
              ))}
            </div>
            <div className='container d-flex justify-content-between'>
              <button disabled={this.state.page === 1} onClick={this.handlePrevClick} type='button' className='btn btn-dark'>
                &larr; previous
              </button>
              <button onClick={this.handleNextClick} type='button' className='btn btn-dark'>
                next &rarr;
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default News;



