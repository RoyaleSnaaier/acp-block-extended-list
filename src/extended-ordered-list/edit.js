/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */

import {InnerBlocks, InspectorControls, useBlockProps} from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl, SelectControl } from '@wordpress/components';

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
					{attributes.ordered ? (
						<SelectControl
							label="Ordered List Style"
							value={attributes.listStyle}
							options={[
								{ label: 'Decimal', value: 'decimal' },
								{ label: 'Lower Alpha', value: 'lower-alpha' },
								{ label: 'Upper Alpha', value: 'upper-alpha' },
								{ label: 'Lower Roman', value: 'lower-roman' },
								{ label: 'Upper Roman', value: 'upper-roman' },
							]}
							onChange={ v => setAttributes({ listStyle: v }) }
						/>
					) : (
						<SelectControl
							label="Unordered List Style"
							value={attributes.listStyle}
							options={[
								{ label: 'Disc', value: 'disc' },
								{ label: 'Circle', value: 'circle' },
								{ label: 'Square', value: 'square' },
								{ label: 'None', value: 'none' },
							]}
							onChange={ v => setAttributes({ listStyle: v }) }
						/>
					)}
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				{attributes.ordered ? (
					<ol start={attributes.start} style={{ listStyleType: attributes.listStyle }}>
						<InnerBlocks />
					</ol>
				) : (
					<ul style={{ listStyleType: attributes.listStyle }}>
						<InnerBlocks />
					</ul>
				)}
			</div>
		</>
	);
}
