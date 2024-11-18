import {InnerBlocks, InspectorControls, useBlockProps} from '@wordpress/block-editor';

import {Flex, PanelBody, ToggleControl} from "@wordpress/components";
import blockData from './block.json';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		style: {
			border : '1px dotted #000',
			margin: '10px',
			padding: '10px'
		}
	} );

	return (
		<>
			<li {...blockProps}>
				<InnerBlocks allowedBlocks={blockData.attributes.allowedBlocks.default} />
			</li>
		</>

	);
}
