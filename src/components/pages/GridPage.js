import React, { Component } from 'react'
import CodeSnippet from '../helper/CodeSnippet'

export class GridPage extends Component {
  render () {
    return (
      <div>
        <div className="sg-hero">
          <div className="sg-hero__elem">
            <div className="flex">
              <div className="flex__i--xs-12">
                <div className="sg-grid"></div>
              </div>
              <div className="flex__i--xs-3">
                <div className="sg-grid"></div>
              </div>
              <div className="flex__i--xs-9">
                <div className="sg-grid"></div>
              </div>
              <div className="flex__i--xs-4">
                <div className="sg-grid"></div>
              </div>
              <div className="flex__i--xs-4">
                <div className="sg-grid"></div>
              </div>
              <div className="flex__i--xs-4">
                <div className="sg-grid"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="app-view">
          <div className="app-menu-title">
            <h1>Grid</h1>
          </div>

          <h2>Base</h2>
          <p>Grid is 12 columns by default. Can be customized and allow for multiple breakpoints. Applying comma separated integers creates multiple, with the value being the modifier. Example: flex--10</p>

          <div className="flex">
            <div className="flex__i--xs-12">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-3">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-9">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-4">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-4">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-4">
              <div className="sg-grid"></div>
            </div>
          </div>

<CodeSnippet>
  {`
    <div class="flex">
      <div class="flex__i--xs-12">
      </div>
      <div class="flex__i--xs-3">
      </div>
      <div class="flex__i--xs-9">
      </div>
      <div class="flex__i--xs-4">
      </div>
      <div class="flex__i--xs-4">
      </div>
      <div class="flex__i--xs-4">
      </div>
    </div>
  `}
</CodeSnippet>

          <h2>Offset</h2>
          <p>Offsetting is as easy as 1, 2, o. Just replace the i with o, and the number you want to offset. Same rules apply.</p>

          <div className="flex">
            <div className="flex__i--xs-12">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-3">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-9 flex__o--xs-3">
              <div className="sg-grid"></div>
            </div>
          </div>

<CodeSnippet>
  {`
    <div class="flex">
      <div class="flex__i--xs-9 flex__o--xs-3">
      </div>
    </div>
  `}
</CodeSnippet>

          <h2>Alignment</h2>
          <p>Applies to all breakpoints, and options are start, center, end, around, between, top, middle, bottom. These are correlate to the flexbox spec.</p>

          <div className="flex flex--xs-middle">
            <div className="flex__i--xs-4">
              <div className="sg-grid sg-grid--h100"></div>
            </div>
            <div className="flex__i--xs-4">
              <div className="sg-grid"></div>
            </div>
            <div className="flex__i--xs-4">
              <div className="sg-grid"></div>
            </div>
          </div>

<CodeSnippet>
  {`
    <div class="flex flex--xs-middle">
    </div>
  `}
</CodeSnippet>

        </div>
      </div>
    )
  }
}

export default GridPage
