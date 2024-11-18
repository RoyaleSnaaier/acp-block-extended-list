/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

import {InnerBlocks, InspectorControls, useBlockProps} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

import './editor.css';

export default function Edit( { attributes, setAttributes } ) {
	const blockProps = useBlockProps( {
		start : attributes.start,
		style : {
			padding : '10px',
			paddingLeft : '20px',
		},
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={"Settings"}>
					{attributes.ordered && (
						<TextControl
							label="Start Number"
							value={attributes.start}
							onChange={ v => setAttributes({ start: v }) }
						/>
					)}
					<ToggleControl
						label="Ordered List"
						checked={attributes.ordered}
						onChange={ v => {
							setAttributes({ ordered: v });
							if (v) {
								setAttributes({ listStyle: 'decimal' });
							} else {
								setAttributes({ listStyle: 'disc' });
							}
						}}
						/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{attributes.ordered ? (
					<ol start={attributes.start} className="list list-styled-ordered list-leading-zero">
						<InnerBlocks />
					</ol>
				) : (
					<ul className="list list-styled-unordered">
						<InnerBlocks />
					</ul>
				)}
			</div>
		</>
	);
}
