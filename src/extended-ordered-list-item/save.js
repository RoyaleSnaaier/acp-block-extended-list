import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	return (
		<li {...useBlockProps.save()}>
			<InnerBlocks.Content/>
		</li>
	);
}
