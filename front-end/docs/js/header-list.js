function css(element, style) {
	for (const property in style) element.style[property] = style[property];
}

function scrollToHeader(headers, title) {
	headers.forEach((element) => {
		if (element.textContent === title) {
			element.scrollIntoView({
				behavior: 'smooth',
				block: 'start',
				inline: 'nearest',
			});
		}
	});
}

function selectAnchor(anchors, title) {
	anchors.forEach((anchor) => {
		if (anchor.textContent === title) {
			css(anchor, {
				'font-weight': '700',
				'font-size': '18px',
			});
		} else {
			css(anchor, {
				'font-weight': '400',
				'font-size': '14px',
			});
		}
	});
}

document.addEventListener('DOMContentLoaded', () => {
	const list = document.createElement('ul');
	css(list, {
		position: 'absolute',
		padding: '100px 0 0',
		top: 0,
		right: 0,
		bottom: 0,
		width: '200px',
		'pointer-events': 'none',
	});

	const headers = Array.from(document.querySelectorAll('h2, h3, h4, h5, h6'));
	const anchors = [];

	headers.forEach((element) => {
		const listItem = document.createElement('li');
		css(listItem, {
			'border-left': '3px solid #2980b9',
			'pointer-events': 'auto',
		});
		const anchor = document.createElement('a');
		anchor.textContent = element.textContent;
		anchor.href = `#${element.textContent}`;
		css(anchor, {
			display: 'inline-block',
			width: '100%',
			padding: '0 20px',
			'font-family': '"Roboto", sans-serif',
			'text-decoration': 'none',
			'white-space': 'nowrap',
			'text-overflow': 'ellipsis',
			overflow: 'hidden',
		});

		listItem.appendChild(anchor);
		list.appendChild(listItem);

		anchors.push(anchor);
	});

	document.getElementsByClassName('row main')[0].appendChild(list);

	const content = document.getElementsByClassName('content')[0];
	css(content, { 'padding-right': '200px' });

	content.addEventListener('scroll', () => {
		const header = headers
			.filter(
				(element) =>
					element.getBoundingClientRect().top < content.clientHeight * 0.5
			)
			.pop().textContent;

		selectAnchor(anchors, header);
	});

	window.addEventListener('hashchange', () => {
		const header = decodeURIComponent(window.location.hash).substring(1);
		scrollToHeader(headers, header);
	});

	if (window.location.hash) {
		const header = decodeURIComponent(window.location.hash).substring(1);
		scrollToHeader(headers, header);
		selectAnchor(anchors, header);
	} else {
		selectAnchor(anchors, anchors[0].textContent);
	}
});
