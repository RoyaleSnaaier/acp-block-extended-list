import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save({
		'start': attributes.start,
	});

	return (
		attributes.ordered ? (
			<ol {...blockProps} start={attributes.start} style={{ listStyleType: attributes.listStyle }}>
				<InnerBlocks.Content />
			</ol>
		) : (
			<ul {...blockProps} style={{ listStyleType: attributes.listStyle }}>
				<InnerBlocks.Content />
			</ul>
		)
	);
}
