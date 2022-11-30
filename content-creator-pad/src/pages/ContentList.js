import React from 'react';
import ContentListWarp from '../components/ContentListWarp';
import ContentListHead from '../components/ContentListHead';
import ContentListSearchBar from '../components/ContentListSearchBar';
import { getDataList } from '../data';

// function ContentList() {
//     const contents = getDataList();

//     return (
//         <div className='content-list'>
//             <ContentListHead />
//             <ContentListSearchBar />
//             <ContentListWarp contents={contents} />
//         </div>
//     );
// }

class ContentList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contents: getDataList(),
            keyword: '',
        }

        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });
    }

    render() {
        const contents = this.state.contents.filter((content) => {
            return content.title.toLowerCase().includes(
                this.state.keyword.toLowerCase()
            );
        });

        return (
            <div className='content-list'>
                <ContentListHead />
                <ContentListSearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <ContentListWarp contents={contents} />
            </div>
        );
    }
}

export default ContentList;
