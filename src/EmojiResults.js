import React, { PureComponent } from 'react';
import EmojiResultRow from './EmojiResultRow';
import PropTypes from 'prop-types';
import ClipBoard from 'clipboard';

import './EmojiResults.css';

export default class EmojiResults extends PureComponent {
    static propTypes = {
        emojiData: PropTypes.array
    }

    componentDidMount() {
        this.clipboard = new ClipBoard('.copy-to-clipboard');
    }

    componentWillUnmount() {
        this.clipboard.destroy();
    }

    render() {
        return(
            <div className='component-emoji-results'>
                {this.props.emojiData.map(emojiData => (
                    <EmojiResultRow
                        key={emojiData.title}
                        symbol={emojiData.symbol}
                        title={emojiData.title}
                    />
                ))}
            </div>
        );
    }
}