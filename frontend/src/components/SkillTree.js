import * as React from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
const SVGComponent = (props) => (
  <TransformWrapper wheel={{ step: "0.05" }}>
    <TransformComponent>
      <svg
        viewBox="-250,-250,640,640"
        width={1500}
        height={300}
        style={{
          maxWidth: "100%",
          height: "auto",
          height: "intrinsic",
        }}
        fontFamily="sans-serif"
        fontSize={10}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
      >
        <g fill="none" stroke="#FFFFFF" strokeOpacity={0.4} strokeWidth={1.5}>
          <path d="M0,0C7.248564949715891,47.04485419437232,27.327069780546086,-38.97423837882101,54.65413956109217,-77.94847675764203" />
          <path d="M0,0C7.248564949715891,47.04485419437232,42.73463457064887,20.964517836408795,85.46926914129774,41.92903567281759" />
          <path d="M0,0C7.248564949715891,47.04485419437232,-28.115765771809,38.409161863607146,-56.231531543618,76.81832372721429" />
          <path d="M0,0C7.248564949715891,47.04485419437232,-37.79128851646348,-28.94094871052806,-75.58257703292696,-57.88189742105612" />
          <path d="M54.65413956109217,-77.94847675764203C81.98120934163826,-116.92271513646305,42.98416149300273,-136.17709741635508,57.31221532400364,-181.56946322180679" />
          <path d="M54.65413956109217,-77.94847675764203C81.98120934163826,-116.92271513646305,81.98120934163826,-116.92271513646305,109.30827912218435,-155.89695351528405" />
          <path d="M54.65413956109217,-77.94847675764203C81.98120934163826,-116.92271513646305,113.37386554939043,-86.8228461315842,151.1651540658539,-115.76379484211226" />
          <path d="M85.46926914129774,41.92903567281759C128.20390371194662,62.893553509226386,142.67382429902864,-6.001654762639084,190.23176573203818,-8.002206350185444" />
          <path d="M85.46926914129774,41.92903567281759C128.20390371194662,62.893553509226386,82.57596316526732,116.503434744768,110.10128422035643,155.337912993024" />
          <path d="M-56.231531543618,76.81832372721429C-84.347297315427,115.22748559082143,-37.04721367244286,137.9106375850259,-49.39628489659047,183.8808501133679" />
          <path d="M-56.231531543618,76.81832372721429C-84.347297315427,115.22748559082143,-120.26494279717967,76.99469809013543,-160.3532570629062,102.6595974535139" />
          <path d="M-75.58257703292696,-57.88189742105612C-113.37386554939044,-86.82284613158419,-142.67382429902864,-6.001654762639036,-190.23176573203818,-8.00220635018538" />
          <path d="M-75.58257703292696,-57.88189742105612C-113.37386554939044,-86.82284613158419,-134.25021829685033,-48.66948620283593,-179.0002910624671,-64.8926482704479" />
          <path d="M-75.58257703292696,-57.88189742105612C-113.37386554939044,-86.82284613158419,-113.37386554939044,-86.82284613158419,-151.16515406585393,-115.76379484211223" />
          <path d="M-75.58257703292696,-57.88189742105612C-113.37386554939044,-86.82284613158419,-81.98120934163828,-116.92271513646305,-109.30827912218436,-155.89695351528405" />
          <path d="M-75.58257703292696,-57.88189742105612C-113.37386554939044,-86.82284613158419,-42.984161493002745,-136.17709741635508,-57.31221532400366,-181.56946322180679" />
          <path d="M190.23176573203818,-8.002206350185444C237.78970716504773,-10.002757937731806,237.78970716504773,-10.002757937731806,285.3476485980573,-12.003309525278167" />
          <path d="M110.10128422035643,155.337912993024C137.62660527544554,194.17239124128,198.45645779679722,131.37364407957955,238.14774935615668,157.6483728954955" />
          <path d="M110.10128422035643,155.337912993024C137.62660527544554,194.17239124128,103.73238606733314,214.20455662935314,124.47886328079977,257.0454679552238" />
          <path d="M110.10128422035643,155.337912993024C137.62660527544554,194.17239124128,58.22441702139395,230.7681027839827,69.86930042567275,276.92172334077924" />
          <path d="M-49.39628489659047,183.8808501133679C-61.74535612073809,229.85106264170986,-38.03975050691468,234.940369841736,-45.64770060829762,281.9284438100832" />
          <path d="M-49.39628489659047,183.8808501133679C-61.74535612073809,229.85106264170986,-84.81016259332854,222.37633939089199,-101.77219511199426,266.85160726907037" />
          <path d="M-160.3532570629062,102.6595974535139C-200.44157132863276,128.32449681689235,-166.02525598865114,170.52745929586493,-199.23030718638137,204.63295115503792" />
          <path d="M-160.3532570629062,102.6595974535139C-200.44157132863276,128.32449681689235,-224.36385247894637,79.40315926212,-269.23662297473567,95.283791114544" />
          <path d="M285.3476485980573,-12.003309525278167C332.9055900310669,-14.00386111282453,319.6050378972666,-94.20647403807675,365.2629004540189,-107.66454175780198" />
          <path d="M285.3476485980573,-12.003309525278167C332.9055900310669,-14.00386111282453,332.9055900310669,-14.00386111282453,380.46353146407637,-16.00441270037089" />
          <path d="M285.3476485980573,-12.003309525278167C332.9055900310669,-14.00386111282453,326.3876431151885,67.03242813528672,373.0144492745011,76.60848929747054" />
          <path d="M238.14774935615668,157.6483728954955C277.83904091551614,183.92310171141142,291.07275319157065,162.1693323334564,332.65457507608073,185.3363798096644" />
          <path d="M238.14774935615668,157.6483728954955C277.83904091551614,183.92310171141142,262.9827793189252,204.6027804837791,300.5517477930574,233.83174912431892" />
          <path d="M124.47886328079977,257.0454679552238C145.22534049426642,299.88637928109443,189.19854761838195,274.27385872353,216.2269115638651,313.4558385411771" />
          <path d="M124.47886328079977,257.0454679552238C145.22534049426642,299.88637928109443,145.22534049426642,299.88637928109443,165.97181770773304,342.727290606965" />
          <path d="M124.47886328079977,257.0454679552238C145.22534049426642,299.88637928109443,97.86468636820778,318.5039138881222,111.84535584938031,364.00447301499673" />
          <path d="M-199.23030718638137,204.63295115503792C-232.4353583841116,238.73844301421093,-213.5257891217735,255.79088603764586,-244.02947328202686,292.33244118588095" />
          <path d="M-199.23030718638137,204.63295115503792C-232.4353583841116,238.73844301421093,-249.98753081851632,220.29179384457652,-285.70003522116144,251.76205010808744" />
          <path d="M-269.23662297473567,95.283791114544C-314.10939347052494,111.164422966968,-304.70332198421363,134.82627923288786,-348.2323679819584,154.08717626615754" />
          <path d="M-269.23662297473567,95.283791114544C-314.10939347052494,111.164422966968,-321.6811007822758,86.85337874546596,-367.6355437511723,99.2610042805325" />
          <path d="M365.2629004540189,-107.66454175780198C410.9207630107712,-121.12260947752722,410.9207630107712,-121.12260947752722,456.5786255675236,-134.58067719725247" />
          <path d="M380.46353146407637,-16.00441270037089C428.02147289708586,-18.00496428791725,428.02147289708586,-18.00496428791725,475.57941433009546,-20.00551587546361" />
          <path d="M373.0144492745011,76.60848929747054C419.6412554338137,86.18455045965435,419.6412554338137,86.18455045965435,466.26806159312633,95.76061162183817" />
        </g>
        <g>
          <a transform="rotate(81.24087591240877) translate(0,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"langs"}
            </text>
          </a>
          <a transform="rotate(-54.96350364963504) translate(95.2,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.C++"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"C++"}
            </text>
          </a>
          <a transform="rotate(26.131386861313857) translate(95.2,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Python"}
            </text>
          </a>
          <a transform="rotate(126.20437956204381) translate(95.2,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.JavaScript"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"JavaScript"}
            </text>
          </a>
          <a transform="rotate(217.44525547445255) translate(95.2,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Other"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Other"}
            </text>
          </a>
          <a transform="rotate(-72.48175182481752) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.C++.algorithms"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"algorithms"}
            </text>
          </a>
          <a transform="rotate(-54.96350364963504) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.C++.data structures"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"data structures"}
            </text>
          </a>
          <a transform="rotate(-37.44525547445256) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.C++.optimisation"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"optimisation"}
            </text>
          </a>
          <a transform="rotate(-2.4087591240876094) translate(190.4,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python.data science"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"data science"}
            </text>
          </a>
          <a transform="rotate(54.67153284671534) translate(190.4,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python.machine learning"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"machine learning"}
            </text>
          </a>
          <a transform="rotate(105.03649635036498) translate(190.4,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.JavaScript.backend"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"backend"}
            </text>
          </a>
          <a transform="rotate(147.37226277372264) translate(190.4,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.JavaScript.frontend"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"frontend"}
            </text>
          </a>
          <a transform="rotate(182.40875912408757) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Other.BASH"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"BASH"}
            </text>
          </a>
          <a transform="rotate(199.9270072992701) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Other.Docker"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Docker"}
            </text>
          </a>
          <a transform="rotate(217.44525547445255) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Other.Git"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Git"}
            </text>
          </a>
          <a transform="rotate(234.96350364963502) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Other.AWS"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"AWS"}
            </text>
          </a>
          <a transform="rotate(252.48175182481754) translate(190.4,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Other.Linux"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Linux"}
            </text>
          </a>
          <a transform="rotate(-2.4087591240876094) translate(285.6,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python.data science.engineering"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"engineering"}
            </text>
          </a>
          <a transform="rotate(33.50364963503647) translate(285.6,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>
              {"langs.Python.machine learning.natural language processing"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"natural language processing"}
            </text>
          </a>
          <a transform="rotate(64.16058394160584) translate(285.6,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python.machine learning.computer vision"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"computer vision"}
            </text>
          </a>
          <a transform="rotate(75.83941605839416) translate(285.6,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Python.machine learning.django"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"django"}
            </text>
          </a>
          <a transform="rotate(99.19708029197082) translate(285.6,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.JavaScript.backend.Express"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Express"}
            </text>
          </a>
          <a transform="rotate(110.87591240875915) translate(285.6,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.JavaScript.backend.MongoDB"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"MongoDB"}
            </text>
          </a>
          <a transform="rotate(134.23357664233578) translate(285.6,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.JavaScript.frontend.framework"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"framework"}
            </text>
          </a>
          <a transform="rotate(160.5109489051095) translate(285.6,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.JavaScript.frontend.UI"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"UI"}
            </text>
          </a>
          <a transform="rotate(-16.423357664233592) translate(380.8,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python.data science.engineering.extraction"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"extraction"}
            </text>
          </a>
          <a transform="rotate(-2.4087591240876094) translate(380.8,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>
              {"langs.Python.data science.engineering.transformation"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"transformation"}
            </text>
          </a>
          <a transform="rotate(11.605839416058373) translate(380.8,0)">
            <circle fill="#FFFFFF" r={3} />
            <title>{"langs.Python.data science.engineering.loading"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"loading"}
            </text>
          </a>
          <a transform="rotate(29.124087591240865) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.machine learning.natural language processing.NLTK"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"NLTK"}
            </text>
          </a>
          <a transform="rotate(37.8832116788321) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.machine learning.natural language processing.BERT"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"BERT"}
            </text>
          </a>
          <a transform="rotate(55.401459854014576) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.machine learning.computer vision.OpenCV"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"OpenCV"}
            </text>
          </a>
          <a transform="rotate(64.16058394160584) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.machine learning.computer vision.Numpy"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Numpy"}
            </text>
          </a>
          <a transform="rotate(72.91970802919707) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.machine learning.computer vision.Keras"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Keras"}
            </text>
          </a>
          <a transform="rotate(129.85401459854018) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.JavaScript.frontend.framework.React"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"React"}
            </text>
          </a>
          <a transform="rotate(138.6131386861314) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.JavaScript.frontend.framework.Vue"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Vue"}
            </text>
          </a>
          <a transform="rotate(156.1313868613139) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.JavaScript.frontend.UI.Chakra UI"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Chakra UI"}
            </text>
          </a>
          <a transform="rotate(164.8905109489051) translate(380.8,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.JavaScript.frontend.UI.Bootstrap"}</title>
            <text
              transform="rotate(180)"
              dy="0.32em"
              x={-6}
              textAnchor="end"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Bootstrap"}
            </text>
          </a>
          <a transform="rotate(-16.423357664233592) translate(476,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.data science.engineering.extraction.BeautifulSoup"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"BeautifulSoup"}
            </text>
          </a>
          <a transform="rotate(-2.4087591240876094) translate(476,0)">
            <circle fill="#999" r={3} />
            <title>
              {"langs.Python.data science.engineering.transformation.Pandas"}
            </title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"Pandas"}
            </text>
          </a>
          <a transform="rotate(11.605839416058373) translate(476,0)">
            <circle fill="#999" r={3} />
            <title>{"langs.Python.data science.engineering.loading.SQL"}</title>
            <text
              transform="rotate(0)"
              dy="0.32em"
              x={6}
              textAnchor="start"
              paintOrder="stroke"
              stroke="#fff"
              strokeWidth={0}
              fill="white"
            >
              {"SQL"}
            </text>
          </a>
        </g>
      </svg>
    </TransformComponent>
  </TransformWrapper>
)
export default SVGComponent
