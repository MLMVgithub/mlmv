import React from 'react'
import BaseBlockContent from '@sanity/block-content-to-react'
import urlBuilder from '@sanity/image-url'

const urlFor = source =>
    urlBuilder({ projectId: "97psedqm", dataset: "mlmv-dev" }).image(source)

const serializers = {
    types: {
        block(props) {
            switch (props.node.style) {
                case "h1":
                    return <h1>{props.children}</h1>
                case "h2":
                    return <h2>{props.children}</h2>
                case "h3":
                    return <h3>{props.children}</h3>
                case "h4":
                    return <h4>{props.children}</h4>
                case "blockquote":
                    return <blockquote>{props.children}</blockquote>

                case "normal":
                    return <p>{props.children}</p>

                default:
                    return <p>{props.children}</p>
            }
        },

        image: props => (
            <figure>
                <img
                    src={urlFor(props.node.asset)
                        //.width(600)
                        .url()}
                    alt={props.node.alt}
                />
            </figure>
        )
    }
}
const BlockContent = ({ blocks }) => <BaseBlockContent blocks={blocks} serializers={serializers} />

export default BlockContent