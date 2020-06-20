import React from 'react';
import './HomePage.css';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            wikiData: [],
            search: "",
            outerCircle: "outerCircle",
            innerCircle: "innerCircle",
            line: "line",
            flag: true,
            textBox:"hidden",
            textInput:React.createRef()
        }
        this.handleSearch = this.handleSearch.bind(this);
        this.searchKey = this.searchKey.bind(this);
        this.cssChange = this.cssChange.bind(this);
        this.xChange = this.xChange.bind(this);

this.focus=this.focus.bind(this);
    }

    focus(){
        console.log("Am i called");
        setTimeout(()=>{
            this.state.textInput.current.focus();

        },500);
    }
    componentDidMount() {
       // this.getData();
       console.log(this.textInput);
    }

    handleSearch(target) {
        if (target.charCode === 13 &&(this.state.search)!=="") {
            axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: 'query',
                    list: 'search',
                    srsearch: this.state.search,
                    format: 'json',
                    origin: '*'
                }
            }).then(response => {
                this.setState({
                    wikiData: response.data.query.search
                })
                console.log(response.data);

                console.log(response.data.query.search);
            })
            // this.setState({
            //     wikiData:["first post","second post","third post"]
            // })
        }
    }

    getData() {
        axios
            .get("/api")
            .then(data => {
                console.log(data.data.data);
                this.setState({
                    text: data.data.data,
                })
            })

    }
    searchKey(event) {
        this.setState({
            search: event.target.value
        })
    }

    cssChange() {

        if (this.state.flag) {
            this.setState({
                outerCircle: "newouterCircle",
                innerCircle: "newinnerCircle",
                line: "newLine",
                flag: false,
                textBox:"visible",

            })
            this.focus();
        }
    }
    xChange(){
        this.setState({
            outerCircle: "outerCircle",
            innerCircle: "innerCircle",
            line: "line",
            flag: true,
            textBox:"hidden",         

        })
    }

    render() {
        return (
            <div id="home">
                <h1>WikiPedia Viewer</h1>
                <a className="randomLink" href="https://en.wikipedia.org/wiki/Special:Random" target="_blank" rel="noopener noreferrer">Random WikiPedia</a>
<div className="searchIcon" onClick={this.cssChange}>
                    <div className={this.state.outerCircle}>
                        <input ref={this.state.textInput} style={{visibility:this.state.textBox}} className="inputField" type="text" value={this.state.search} onKeyPress={this.handleSearch} onChange={this.searchKey}></input>
                        <div className={this.state.innerCircle}></div>
                        <div style={{visibility:this.state.textBox}} className="X" onClick={this.xChange}>X</div>

                    </div>
                    <div className={this.state.line}></div>
                    </div>



                <div className="listContainer">
                    {this.state.wikiData.map((data, index) => {
                        return <div className="listItem" key={index}><a className="listLink" rel="noopener noreferrer"
                            target="_blank" href={"http://en.wikipedia.org/wiki/" + data.title}><h3>{data.title}</h3><p dangerouslySetInnerHTML={{ __html: data.snippet }}></p></a></div>
                    })}
                </div>
            </div>
        );
    }
}

export default Home;