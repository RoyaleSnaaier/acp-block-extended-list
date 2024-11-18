import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save({
		'start': attributes.start,
	});

	return (
		attributes.ordered ? (
			<ol {...blockProps} start={attributes.start} className="list list-styled-ordered list-leading-zero">
				<InnerBlocks.Content />
			</ol>
		) : (
			<ul {...blockProps} className="list list-styled-unordered">
				<InnerBlocks.Content />
			</ul>
		)
	);
}
