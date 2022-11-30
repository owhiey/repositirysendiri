import React from 'react';
import ContentListItem from './ContentListItem';

function ContentListWarp({ contents }) {
    return (
        <div className='content-list__warp'>
            {
                contents.map((content) => (
                    <ContentListItem key={content.id} {...content} />
                ))
            }
        </div>
    );
}

export default ContentListWarp;
