import {registerBlockType} from '@wordpress/blocks';

import Edit from './edit';
import save from './save';
import metadata from './block.json';
import {withSelect} from "@wordpress/data";

registerBlockType( metadata.name, {
	edit: withSelect((select, props) => {
		return { media: props.attributes.mediaId ? select('core').getMedia(props.attributes.mediaId) : undefined };
	})(Edit),
	save,
} );
